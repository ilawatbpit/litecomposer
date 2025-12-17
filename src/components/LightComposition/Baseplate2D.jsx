// ⚡ FINAL VERSION — Correctly Aligned 2D Plan (Length = Horizontal, Width = Vertical)

import React, { useEffect, useRef } from "react";

export default function Baseplate2D({ stringHeights, surface }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!stringHeights || stringHeights.length === 0 || !surface) return;

    // const plateWidth = Number(surface.width);   // short side  (3D X axis)
    // const plateLength = Number(surface.length); // long side   (3D Z axis)

    const plateWidth = Number(surface.width);   // 3D X
    const plateLength = Number(surface.length); // 3D Z

    if (!plateWidth || !plateLength) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // -------------------------------------------------------------
    // SCALE CANVAS — Length = horizontal, Width = vertical
    // -------------------------------------------------------------
    const margin = 80;
    const maxSize = 900;

    const scale = Math.min(
      maxSize / plateLength,
      maxSize / plateWidth
    );

    const drawWidth = plateLength * scale; // horizontal dimension
    const drawHeight = plateWidth * scale; // vertical dimension

    canvas.width = drawWidth + margin * 2;
    canvas.height = drawHeight + margin * 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.translate(margin, margin);

    // -------------------------------------------------------------
    // DRAW BASEPLATE
    // -------------------------------------------------------------
    ctx.strokeStyle = "#222";
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, drawWidth, drawHeight);

    // -------------------------------------------------------------
    // DRAW PENDANTS — PERFECTLY CENTERED & ROTATED
    // 3D:
    //   s.x = width axis (columns)
    //   s.y = length axis (rows)
    //
    // ROTATED 2D:
    //   horizontal (X) = length = s.y
    //   vertical   (Y) = width  = s.x
    // -------------------------------------------------------------
    ctx.fillStyle = "#000";
    ctx.font = "12px Arial";

    stringHeights.forEach((s) => {
      // Convert from 3D coordinates to 2D millimeters
      const xMm = s.y + plateLength / 2; // LENGTH → horizontal
      const yMm = s.x + plateWidth / 2;  // WIDTH  → vertical

      const xPx = xMm * scale;
      const yPx = yMm * scale;

      ctx.beginPath();
      ctx.arc(xPx, yPx, 4, 0, Math.PI * 2);
      ctx.fill();

      // ctx.fillText(`${s.row}-${s.col} (${s.stringHeight}cm)`, xPx + 8, yPx - 4);
      ctx.fillText(`${s.row}-${s.col}`, xPx - 9, yPx - 7);
    });

    // -------------------------------------------------------------
    // DIMENSION LINES (Corrected Orientation)
    // Bottom horizontal = Length
    // Right vertical = Width
    // -------------------------------------------------------------
    drawDimensionHorizontal(ctx, 0, drawHeight + 30, drawWidth, `${plateLength} cm`);
    drawDimensionVertical(ctx, drawWidth + 30, 0, drawHeight, `${plateWidth} cm`);

  }, [stringHeights, surface]);

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

    // Main dimension line
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

  // Main dimension line
  ctx.beginPath();
  ctx.moveTo(startX + 10, startY);
  ctx.lineTo(startX + 10, startY + totalLength);
  ctx.stroke();

  // Arrows
  drawArrowVertical(ctx, startX + 10, startY, 1);
  drawArrowVertical(ctx, startX + 10, startY + totalLength, -1);

  // -----------------------------------------------------
  // 🔥 ROTATED VERTICAL TEXT (perfectly centered)
  // -----------------------------------------------------
  ctx.save(); // Save original canvas state

  // Move to the center of the vertical dimension line
  ctx.translate(startX + 35, startY + totalLength / 2);

  // Rotate 90° counter-clockwise (text reads bottom → top)
  ctx.rotate(-Math.PI / 2);

  ctx.font = "14px Arial";
  ctx.fillStyle = "#000";
  ctx.textAlign = "center";
  ctx.fillText(label, 0, 0);

  ctx.restore(); // Return canvas to normal
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
      {/* <h2 style={{ marginBottom: 10 }}>2D Plan — Top View</h2> */}
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
