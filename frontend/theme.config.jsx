export default {
    logo: (
        <>
            <span style={{ marginLeft: '.4em', fontWeight: 500 }}>
                The Elites' Security
            </span>
        </>
    ),
    docsRepositoryBase: 'https://github.com',
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
        ©{new Date().getFullYear()} {"Made by The Elites' Security"}
            .
        </span>
        )
    }
}