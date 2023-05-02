export const _matchMedia = {
  addEventListener: jest.fn(),
  addListener: jest.fn(),
  matches: false,
  removeEventListener: jest.fn(),
  removeListener: jest.fn(),
};

window.matchMedia = jest.fn().mockReturnValue(_matchMedia);
