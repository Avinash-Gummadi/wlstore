import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
// import Home from '../modules/Externals/Home';
// import About from '../views/About';
// import Contact from '../views/Contact';
// import Elements from '../views/Elements';
// import Portfolio from '../views/Portfolio';
// import Single from '../views/Single';
// import Authuser from '../views/Authuser';
// import UploadPdf from '../views/UploadPdf';
// import ImageConverter from '../views/ImageConverter';
// import TestFile from '../views/TestFile'; //Remove finally
// import QRCode from '../views/QRCode';
// import ImageCompress from '../views/ImageCompress'
// import ToDo from '../views/ToDo';
// import TypingSkill from '../views/TypingSkill';
// import PieChartCode from '../views/PieChartCode';
// import TypingTips from '../views/TypingTips';
// import BarChart from '../views/BarChart';
// __webpack_public_path__ = 'https://techstore.weblaunch.in/pwagifs/';

function asyncComponent(getComponent) {
    return class AsyncComponent extends React.Component {
        static Component = null;
        state = { Component: AsyncComponent.Component };
        componentWillMount() {
            if (!this.state.Component) {
                getComponent().then(Component => {
                    AsyncComponent.Component = Component
                    this.setState({ Component })
                })
            }
        }
        render() {
            const { Component } = this.state
            if (Component) {
                return <Component {...this.props} />
            }
            return null
        }
    }
}

const Home = asyncComponent(() =>
    import(/* webpackChunkName: "TechStoreHome" */'../modules/Techstore/Home').then(module => module.default)
)
const About = asyncComponent(() =>
    import(/* webpackChunkName: "TechStoreHome" */'../modules/Techstore/About').then(module => module.default)
)
const Contact = asyncComponent(() =>
    import(/* webpackChunkName: "TechStoreHome" */'../modules/Techstore/Contact').then(module => module.default)
)
const Elements = asyncComponent(() =>
    import(/* webpackChunkName: "TechStoreHome" */'../modules/Techstore/Elements').then(module => module.default)
)
const Portfolio = asyncComponent(() =>
    import(/* webpackChunkName: "TechStoreHome" */'../modules/Techstore/Portfolio').then(module => module.default)
)
const Single = asyncComponent(() =>
    import(/* webpackChunkName: "TechStoreHome" */'../modules/Techstore/Single').then(module => module.default)
)
const Authuser = asyncComponent(() =>
    import(/* webpackChunkName: "TechStoreHome" */'../modules/Techstore/Authuser').then(module => module.default)
)
const UploadPdf = asyncComponent(() =>
    import(/* webpackChunkName: "TechStoreHome" */'../modules/Techstore/UploadPdf').then(module => module.default)
)
const ImageConverter = asyncComponent(() =>
    import(/* webpackChunkName: "TechStoreHome" */'../modules/Techstore/ImageConverter').then(module => module.default)
)
const TestFile = asyncComponent(() =>
    import(/* webpackChunkName: "TechStoreHome" */'../modules/Techstore/TestFile').then(module => module.default)
)
const QRCode = asyncComponent(() =>
    import(/* webpackChunkName: "TechStoreHome" */'../modules/Techstore/QRCode').then(module => module.default)
)
const ImageCompress = asyncComponent(() =>
    import(/* webpackChunkName: "TechStoreHome" */'../modules/Techstore/ImageCompress').then(module => module.default)
)
const ToDo = asyncComponent(() =>
    import(/* webpackChunkName: "TechStoreHome" */'../modules/Techstore/ToDo').then(module => module.default)
)
const TypingSkill = asyncComponent(() =>
    import(/* webpackChunkName: "TechStoreHome" */'../modules/Techstore/TypingSkill').then(module => module.default)
)
const PieChartCode = asyncComponent(() =>
    import(/* webpackChunkName: "TechStoreHome" */'../modules/Techstore/PieChartCode').then(module => module.default)
)
const TypingTips = asyncComponent(() =>
    import(/* webpackChunkName: "TechStoreHome" */'../modules/Techstore/TypingTips').then(module => module.default)
)
const BarChart = asyncComponent(() =>
    import(/* webpackChunkName: "TechStoreHome" */'../modules/Techstore/BarChart').then(module => module.default)
)

const ErrorPage = () => <div><h1>Page Not Found, contact administrator. Later design page for this</h1></div>

const getRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route exact={true} path="/" component={Home}></Route>
                <Route exact={true} path="about" component={About}></Route>
                <Route exact={true} path="contact" component={Contact}></Route>
                <Route exact={true} path="elements" component={Elements}></Route>
                <Route exact={true} path="portfolio" component={Portfolio}></Route>
                <Route exact={true} path="single" component={Single}></Route>
                <Route exact={true} path="pdfMerge" component={UploadPdf}></Route>
                <Route exact={true} path="imgconverter" component={ImageConverter}></Route>
                <Route exact={true} path="testlink" component={TestFile}></Route> {/*Remove Finally*/}
                <Route exact={true} path="qrcode" component={QRCode}></Route>
                <Route exact={true} path="todo" component={ToDo}></Route>
                <Route exact={true} path="learn-typing" component={TypingSkill}></Route>
                <Route exact={true} path="typing-tips" component={TypingTips}></Route>
                <Route exact={true} path="piechart" component={PieChartCode}></Route>
                <Route exact={true} path="barchart" component={BarChart}></Route>
                <Route exact={true} path="imagecompress" component={ImageCompress}></Route>
                <Route exact={true} path="auth" component={Authuser}></Route>
                <Route exact={true} path='*' element={<ErrorPage />}></Route>
            </Switch>
        </Router>
    )
}

export default getRoutes
