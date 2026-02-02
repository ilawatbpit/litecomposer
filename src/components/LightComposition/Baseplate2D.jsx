// Correctly Aligned 2D Plan (Length = Horizontal, Width = Vertical)
// Supports RECT + CIRCLE baseplates

import React, { useEffect, useRef } from "react";

export default function Baseplate2D({ stringHeights, surface }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!stringHeights || stringHeights.length === 0 || !surface) return;

    const plateWidth = Number(surface.width);   // 3D X
    const plateLength = Number(surface.length); // 3D Z

    //NEW: shape flag (support different names)
    const shape = surface.shape || surface.surfaceShape || "rect"; // "rect" | "circle"

    if (!plateWidth || !plateLength) return;

    // For circle: use smaller of width/length as DIAMETER basis (same as your 3D)
    const diameterBasis =
      plateWidth && plateLength ? Math.min(plateWidth, plateLength) : (plateWidth || plateLength);

    const circleRadius = Math.max(1, diameterBasis / 2);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // -------------------------------------------------------------
    // SCALE CANVAS — Length = horizontal, Width = vertical
    // -------------------------------------------------------------
    const margin = 80;
    const maxSize = 900;

    // For circle, we scale based on diameter
    const effectiveLength = shape === "circle" ? diameterBasis : plateLength; // horizontal
    const effectiveWidth = shape === "circle" ? diameterBasis : plateWidth;  // vertical

    const scale = Math.min(maxSize / effectiveLength, maxSize / effectiveWidth);

    const drawWidth = effectiveLength * scale; // horizontal dimension
    const drawHeight = effectiveWidth * scale; // vertical dimension

    canvas.width = drawWidth + margin * 2;
    canvas.height = drawHeight + margin * 2;

    ctx.setTransform(1, 0, 0, 1, 0, 0); // reset transform every render
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.translate(margin, margin);

    // -------------------------------------------------------------
    // DRAW BASEPLATE (RECT / CIRCLE)
    // -------------------------------------------------------------
    ctx.strokeStyle = "#222";
    ctx.lineWidth = 2;

    if (shape === "circle") {
      const cx = drawWidth / 2;
      const cy = drawHeight / 2;
      const rPx = circleRadius * scale;

      ctx.beginPath();
      ctx.arc(cx, cy, rPx, 0, Math.PI * 2);
      ctx.stroke();

      // Optional: center mark
      ctx.fillStyle = "#222";
      ctx.beginPath();
      ctx.arc(cx, cy, 2, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.strokeRect(0, 0, drawWidth, drawHeight);
    }


    ctx.fillStyle = "#000";
    ctx.font = "12px Arial";

    //  For circle, we still use plateLength & plateWidth for mapping
    stringHeights.forEach((s) => {
      // plate center in pixels
      const cx = drawWidth / 2;
      const cy = drawHeight / 2;

      // since s.x and s.y are already centered around 0 in 3D,
      const xPx = cx + (Number(s.y || 0) * scale); // horizontal = length (Z stored in y)
      const yPx = cy + (Number(s.x || 0) * scale); // vertical   = width  (X stored in x)

      // If circle, optionally hide points outside the circle
      if (shape === "circle") {
        const rPx = circleRadius * scale;
        const dx = xPx - cx;
        const dy = yPx - cy;
        if (Math.sqrt(dx * dx + dy * dy) > rPx) return;
      }

      ctx.beginPath();
      ctx.arc(xPx, yPx, 4, 0, Math.PI * 2);
      ctx.fill();

      // Label
      const label = (s.row != null && s.col != null)
        ? `${s.row}-${s.col}`
        : (s.index != null ? `${s.index + 1}` : "");

      if (label) ctx.fillText(label, xPx - 9, yPx - 7);
    });

    if (shape === "circle") {
      const rPx = circleRadius * scale;

      // Draw a diameter line (horizontal) across center
      const cx = drawWidth / 2;
      const cy = drawHeight / 2;

      drawDimensionHorizontal(
        ctx,
        cx - rPx,
        drawHeight + 30,
        rPx * 2,
        `${diameterBasis} cm`
      );
    } else {
      drawDimensionHorizontal(ctx, 0, drawHeight + 30, drawWidth, `${plateLength} cm`);
      drawDimensionVertical(ctx, drawWidth + 30, 0, drawHeight, `${plateWidth} cm`);
    }

  }, [stringHeights, surface]);


  
  stringHeights.forEach((s, i) => {
  if (s.index == null) s.index = i;

  // If row/col are missing (circle layout), derive a consistent label
  if (s.row == null) s.row = `P${i + 1}`; // row becomes "P1", "P2", ...
  if (s.col == null) s.col = "";          // keep empty so table prints "R<P#> C"
});

  // ---------------------------------------------------------
  // HELPER: HORIZONTAL DIMENSION LINE
  // ---------------------------------------------------------
  function drawDimensionHorizontal(ctx, startX, startY, totalLength, label) {
    ctx.strokeStyle = "#444";
    ctx.lineWidth = 1;

    // Extension lines
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX, startY + 20);
    ctx.moveTo(startX + totalLength, startY);
    ctx.lineTo(startX + totalLength, startY + 20);
    ctx.stroke();

    // Main line
    ctx.beginPath();
    ctx.moveTo(startX, startY + 10);
    ctx.lineTo(startX + totalLength, startY + 10);
    ctx.stroke();

    // Arrows
    drawArrow(ctx, startX, startY + 10, 1);
    drawArrow(ctx, startX + totalLength, startY + 10, -1);

    ctx.font = "14px Arial";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.fillText(label, startX + totalLength / 2, startY + 35);
  }

  // ---------------------------------------------------------
  // HELPER: VERTICAL DIMENSION LINE
  // ---------------------------------------------------------
  function drawDimensionVertical(ctx, startX, startY, totalLength, label) {
    ctx.strokeStyle = "#444";
    ctx.lineWidth = 1;

    // Extension lines
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX + 20, startY);
    ctx.moveTo(startX, startY + totalLength);
    ctx.lineTo(startX + 20, startY + totalLength);
    ctx.stroke();

    // Main line
    ctx.beginPath();
    ctx.moveTo(startX + 10, startY);
    ctx.lineTo(startX + 10, startY + totalLength);
    ctx.stroke();

    // Arrows
    drawArrowVertical(ctx, startX + 10, startY, 1);
    drawArrowVertical(ctx, startX + 10, startY + totalLength, -1);

    // Rotated label
    ctx.save();
    ctx.translate(startX + 35, startY + totalLength / 2);
    ctx.rotate(-Math.PI / 2);

    ctx.font = "14px Arial";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.fillText(label, 0, 0);

    ctx.restore();
  }

  // ---------------------------------------------------------
  // ARROWS
  // ---------------------------------------------------------
  function drawArrow(ctx, x, y, direction) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 6 * direction, y - 6);
    ctx.lineTo(x + 6 * direction, y + 6);
    ctx.closePath();
    ctx.fillStyle = "#444";
    ctx.fill();
  }

  function drawArrowVertical(ctx, x, y, direction) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - 6, y + 6 * direction);
    ctx.lineTo(x + 6, y + 6 * direction);
    ctx.closePath();
    ctx.fillStyle = "#444";
    ctx.fill();
  }

  return (
    <div style={{ textAlign: "center" }}>
      <canvas
        className="w-full"
        ref={canvasRef}
        style={{
          border: "1px solid #ccc",
          background: "#fff",
        }}
      />
    </div>
  );
}
