"use client";

import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { useState } from "react";

export function MantineThemeProvider({ children }: { children: React.ReactNode }) {
    const [colorScheme, setColorScheme] = useState<"light" | "dark">("light");
  
    return (
    //   <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={setColorScheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <Notifications /> {/* Ajout du composant Notifications */}
          {children}
        </MantineProvider>
    //   </ColorSchemeProvider>
    );
  }