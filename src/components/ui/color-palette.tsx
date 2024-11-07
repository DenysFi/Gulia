function ColorPalette({ colors }: { colors: string[] }) {
  return (
    <div className="color-palette">
      <div className="color-palette__preview">
        <div
          className="color-palette-main"
          style={{
            background: `linear-gradient(to right,
                ${colors.join(', ')}
            )`,
          }}
        />
      </div>
      {/* {colors.map((color, index) => (
        <div className={`color-palette-color _${index + 1}`}>
          <div className="color-palette__hex">
            <h6 id="color">{color}</h6>
          </div>
        </div>
      ))} */}
    </div>
  );
}

export default ColorPalette;
