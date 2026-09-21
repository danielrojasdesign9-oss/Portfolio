import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import CarbonLinkButton from './CarbonLinkButton'

vi.mock('@carbon/react', () => ({
  Button: ({ children, href, kind, size, className, target, rel, renderIcon: Icon, ...rest }: any) => (
    <a
      href={href}
      data-kind={kind}
      data-size={size}
      className={className}
      target={target}
      rel={rel}
      {...(Icon ? { 'data-icon': 'true' } : {})}
      {...rest}
    >
      {Icon && <Icon data-testid="icon-rendered" />}
      {children}
    </a>
  ),
}))

vi.mock('@carbon/icons-react', () => ({
  ArrowRight: () => <span data-testid="icon-arrow-right" />,
  ArrowUpRight: () => <span data-testid="icon-arrow-up-right" />,
  Email: () => <span data-testid="icon-email" />,
  LogoLinkedin: () => <span data-testid="icon-linkedin" />,
  Chat: () => <span data-testid="icon-chat" />,
  Download: () => <span data-testid="icon-download" />,
}))

describe('CarbonLinkButton', () => {
  it('should render children text', () => {
    render(<CarbonLinkButton href="/test">Click me</CarbonLinkButton>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('should set href attribute', () => {
    render(<CarbonLinkButton href="https://example.com">Link</CarbonLinkButton>)
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://example.com')
  })

  it('should default kind to primary', () => {
    render(<CarbonLinkButton href="/test">Primary</CarbonLinkButton>)
    expect(screen.getByRole('link')).toHaveAttribute('data-kind', 'primary')
  })

  it('should accept custom kind prop', () => {
    render(
      <CarbonLinkButton href="/test" kind="secondary">
        Secondary
      </CarbonLinkButton>,
    )
    expect(screen.getByRole('link')).toHaveAttribute('data-kind', 'secondary')
  })

  it('should default size to lg', () => {
    render(<CarbonLinkButton href="/test">Large</CarbonLinkButton>)
    expect(screen.getByRole('link')).toHaveAttribute('data-size', 'lg')
  })

  it('should accept custom size prop', () => {
    render(
      <CarbonLinkButton href="/test" size="sm">
        Small
      </CarbonLinkButton>,
    )
    expect(screen.getByRole('link')).toHaveAttribute('data-size', 'sm')
  })

  it('should render ArrowRight icon when icon="ArrowRight"', () => {
    render(
      <CarbonLinkButton href="/test" icon="ArrowRight">
        With Icon
      </CarbonLinkButton>,
    )
    expect(screen.getByTestId('icon-arrow-right')).toBeInTheDocument()
  })

  it('should render ArrowUpRight icon when icon="ArrowUpRight"', () => {
    render(
      <CarbonLinkButton href="/test" icon="ArrowUpRight">
        With Icon
      </CarbonLinkButton>,
    )
    expect(screen.getByTestId('icon-arrow-up-right')).toBeInTheDocument()
  })

  it('should render Email icon when icon="Email"', () => {
    render(
      <CarbonLinkButton href="/test" icon="Email">
        Email
      </CarbonLinkButton>,
    )
    expect(screen.getByTestId('icon-email')).toBeInTheDocument()
  })

  it('should render LogoLinkedin icon when icon="LogoLinkedin"', () => {
    render(
      <CarbonLinkButton href="/test" icon="LogoLinkedin">
        LinkedIn
      </CarbonLinkButton>,
    )
    expect(screen.getByTestId('icon-linkedin')).toBeInTheDocument()
  })

  it('should render Chat icon when icon="Chat"', () => {
    render(
      <CarbonLinkButton href="/test" icon="Chat">
        Chat
      </CarbonLinkButton>,
    )
    expect(screen.getByTestId('icon-chat')).toBeInTheDocument()
  })

  it('should render Download icon when icon="Download"', () => {
    render(
      <CarbonLinkButton href="/test" icon="Download">
        Download
      </CarbonLinkButton>,
    )
    expect(screen.getByTestId('icon-download')).toBeInTheDocument()
  })

  it('should not render icon wrapper when no icon prop', () => {
    render(<CarbonLinkButton href="/test">No Icon</CarbonLinkButton>)
    expect(screen.queryByTestId('icon-wrapper')).not.toBeInTheDocument()
  })

  it('should forward target and rel attributes', () => {
    render(
      <CarbonLinkButton href="/ext" target="_blank" rel="noopener noreferrer">
        External
      </CarbonLinkButton>,
    )
    const link = screen.getByRole('link', { name: /external/i })
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should forward custom className', () => {
    render(
      <CarbonLinkButton href="/test" className="custom-class">
        Custom
      </CarbonLinkButton>,
    )
    expect(screen.getByRole('link').className).toContain('custom-class')
  })

  it('should accept all kind variants', () => {
    const kinds = ['primary', 'secondary', 'tertiary', 'ghost', 'danger'] as const
    kinds.forEach((kind) => {
      const { unmount } = render(
        <CarbonLinkButton href="/test" kind={kind}>
          {kind}
        </CarbonLinkButton>,
      )
      expect(screen.getByRole('link')).toHaveAttribute('data-kind', kind)
      unmount()
    })
  })

  it('should accept all size variants', () => {
    const sizes = ['sm', 'md', 'lg', 'xl'] as const
    sizes.forEach((size) => {
      const { unmount } = render(
        <CarbonLinkButton href="/test" size={size}>
          {size}
        </CarbonLinkButton>,
      )
      expect(screen.getByRole('link')).toHaveAttribute('data-size', size)
      unmount()
    })
  })
})
