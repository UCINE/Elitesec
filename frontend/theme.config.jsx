import { useConfig } from 'nextra-theme-docs'

export default {
    logo: (
        <>
            <span style={{ marginLeft: '.4em', fontWeight: 500 }}>
                The Elites' Security
            </span>
        </>
    ),
    useNextSeoProps() {
        return {
            titleTemplate: "The Elites' Security | %s"
        }
    },
    project: {
        link: 'https://github.com/The-Elites-Security'
    },
    footer: {
        text: (
            <span>
                ©{new Date().getFullYear()} {"Made by The Elites' Security"}.
            </span>
        )
    },
    // Theme customization
    primaryHue: 359,
    primarySaturation: 65,
    darkMode: true,
}