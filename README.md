# react-sentry-feedback

for use with sentry.io - https://docs.sentry.io/learn/user-feedback/?platform=browser

# Install

```
npm install git+ssh://git@github.com/ArupAus/react-sentry-feedback.git --save`
```

# Usage

```
<Feedback
  dsn="https://d9feea4c84ea4cfb@sentry.io/11154"
  style={customStyle}
/>

```

# Customisation

Default style is:
```
{
  background: '#ff4040',
  borderRadius: '3px',
  border: 'none',
  bottom: '-4px',
  boxShadow: '1px 1px 1px 1px rgba(0,0,0,0.3)',
  color: 'white',
  display: 'inline-block',
  fontSize: '1em',
  padding: '0.25em 1em',
  margin: '1em',
  position: 'fixed',
  right: '10px',
  height: '35px',
  verticalAlign: 'middle'
}

```

this can be over-ridden with a custom style object as above
