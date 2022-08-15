import { formatQuerySettings } from '../../src/data_formatter'

describe('formatQuerySettings', () => {
  it('formats boolean', () => {
    expect(formatQuerySettings(true)).toBe('1')
    expect(formatQuerySettings(false)).toBe('0')
  })

  it('formats a number', () => {
    expect(formatQuerySettings(1)).toBe('1')
  })

  it('formats a string', () => {
    expect(formatQuerySettings('42')).toBe('42')
  })
  it('throws on unsupported values', () => {
    expect(() => formatQuerySettings(undefined as any)).toThrowError(
      'Unsupported value in query settings: [undefined].'
    )
    expect(() => formatQuerySettings([1, 2] as any)).toThrowError(
      'Unsupported value in query settings: [1,2].'
    )
  })
})
