import React from 'react'

function getType(data) {
  const type = typeof data
  if (type === 'object') {
    if (Array.isArray(data)) {
      return 'array'
    }
    if (data === null) {
      return 'null'
    }
  }
  return type
}

function ValueViewer({ value }) {
  return (
    <li>{value}</li>
  )
}

function ListViewer({ value, level }) {
  return (
    <ul>
      {Object.keys(value).map(key =>
        <JSONViewer key={key} name={key || '[Пустая строка]'} value={value[key]} level={level + 1} />
      )}
    </ul>
  )
}

export function JSONViewer({ name, value, level }) {
  const type = getType(value)
  const Viewer = type === 'object' || type === 'array'
    ? ListViewer
    : ValueViewer
  const heading = `h${level < 5 ? level + 1 : 6}`
  return (
    <div>
      {React.createElement(heading, {}, `[${name}]`)}
      <Viewer value={value} level={level} />
    </div>
  )
}