import Proxy from "./useDevelopmentProxy"
import ProxyInterface from "../interfaces/IProxy"

const selectedProxy: ProxyInterface = Proxy()

export default selectedProxy