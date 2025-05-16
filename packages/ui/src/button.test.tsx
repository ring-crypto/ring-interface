import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './button'

describe('Button Component', () => {
  const mockAppName = 'TestApp'

  it('should render the button with children', () => {
    render(<Button appName={mockAppName}>Click Me</Button>)
    expect(
      screen.getByRole('button', { name: /click me/i })
    ).toBeInTheDocument()
  })

  it('should call onClick handler when clicked', () => {
    const handleClick = vi.fn()
    render(
      <Button appName={mockAppName} onClick={handleClick}>
        Click Test
      </Button>
    )
    fireEvent.click(screen.getByRole('button', { name: /click test/i }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('should apply the provided className', () => {
    render(
      <Button appName={mockAppName} className="custom-class">
        Styled Button
      </Button>
    )
    expect(screen.getByRole('button', { name: /styled button/i })).toHaveClass(
      'custom-class'
    )
  })
})
