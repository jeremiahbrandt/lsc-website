import NavigationData from '../interfaces/NavigationData';

const Proxy = () => {
    const HOME_URL="localhost:8080"
    const getNavigationLinks = (): NavigationData => {
        const dummyData: NavigationData = [
            {
                name: "Home",
                url: HOME_URL
            }, 
            {
                name: "About",
                url: `${HOME_URL}/about`
            },
            {
                name: "Contact",
                url: `${HOME_URL}/contact`
            }
        ]

        return dummyData
    }

    return {getNavigationLinks}
}

export default Proxy