# Button

A reusable `Button` component that supports variants, optional icons, and link behavior.

---

## 🔧 Props

| Prop Name     | Type                                      | Default     | Description |
|---------------|-------------------------------------------|-------------|-------------|
| `label`       | `string`                                  | **required**| Text to display inside the button. |
| `onClick`     | `function`                                | `undefined` | Callback triggered on button click. Ignored if `link` is provided. |
| `className`   | `string`                                  | `""`        | Custom class(es) to override or extend styling. |
| `variant`     | `"primary" \| "..."`                      | `"primary"` | Visual style of the button. Must match a class in `Button.module.css`. |
| `iconPosition`| `"none" \| "left" \| "right"`             | `"none"`    | Adds a right-arrow icon to the left or right of the button. |
| `link`        | `string \| null`                          | `null`      | If provided, renders the button as a styled `<a>` tag linking to the specified URL. |

---

## 📦 Usage

### Basic Button

```jsx
<Button label="Click Me" onClick={() => alert("Clicked!")} />
```

### Button with Right Icon

```jsx
<Button label="Next" iconPosition="right" onClick={handleNext} />
```

### Button as a Link

```jsx
<Button label="Go to Docs" link="https://example.com/docs" />
```

### Custom Style and Variant

```jsx
<Button
  label="Submit"
  variant="secondary"
  className="myCustomClass"
/>
```

---

## 🎨 Styling

- `Button.module.css` must define classes like:
  - `.primary`, `.secondary`, etc. (variants)
  - `.buttonWrapper` – Container of the button and icon
  - `.icon` – Arrow icon styling
  - `.flipped` – Flips the arrow icon horizontally (used for right-positioned icons)
  - `.linkWrapper` – Additional styles when the button is rendered as a link

---

## 📎 Notes

- When `link` is provided, the button becomes a link (`<a>` tag) and `onClick` is ignored.
- Arrow icon is sourced from `../assets/right-arrow.svg` and conditionally shown.
- Accessibility: All icons include `alt` text for screen readers.
