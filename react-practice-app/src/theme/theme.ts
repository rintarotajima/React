import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
    globalCss: {
        body: {
            backgroundColor: "gray.100",
            color: "gray.800"
        }
    }
})

export const system = createSystem(defaultConfig, customConfig)