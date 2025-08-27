import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

describe('App error scenarios', () => {
  it('throws when querying a non-existent button label', () => {
    render(<App />)
    expect(() => screen.getByRole('button', { name: /count is 1/i })).toThrow()
  })
})
