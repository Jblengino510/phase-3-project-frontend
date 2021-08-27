import NavBar from './NavBar'
import Link from '@material-ui/core/Link'

function Layout({ children }) {
    return (
        <div>
            <NavBar />
            {children}
            <footer className="footer">
                This app was made with <Link href="https://www.ruby-lang.org/en/">Ruby</Link> 
            </footer>
        </div>
    )
}

export default Layout