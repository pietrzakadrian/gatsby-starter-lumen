import { getDefaultColorMode } from "@/utils";

describe("getDefaultColorMode", () => {
  test("successful return color mode", () => {
    expect(getDefaultColorMode()).toBe("dark");

    (window.matchMedia as jest.Mock).mockReturnValue({
      matches: true,
    });

    expect(getDefaultColorMode()).toBe("dark");

    (window.matchMedia as jest.Mock).mockReturnValue({});
    expect(getDefaultColorMode()).toBe("dark");
  });

  test("successful return default color mode on ssr", () => {
    (window.matchMedia as jest.Mock).mockReturnValue({
      matches: true,
    });

    const windowSpy: jest.SpyInstance = jest.spyOn(global, "window", "get");

    windowSpy.mockReturnValue(undefined);
    expect(window).toBeUndefined();

    expect(getDefaultColorMode()).toBe("dark");

    windowSpy.mockRestore();
    expect(getDefaultColorMode()).toBe("dark");
  });
});
