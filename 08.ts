type RemoveNaughtyChildren<T extends Record<string, unknown>> = Omit<T, `naughty_${string}`>;
