import { Route, Routes as ReactRoutes, HashRouter } from 'react-router-dom';
import HelpView from './views/HelpView/HelpView';
import HomeView from './views/HomeView/HomeView';
import CreateView from './views/CreateView/CreateView';

function Routes() {
    return (
        <>
            <HashRouter>
                <ReactRoutes>
                    <Route path="/help" Component={HelpView} />
                    <Route path="/create" Component={CreateView} />
                    <Route path="/" Component={HomeView} />
                    <Route path="*" Component={HomeView} />
                </ReactRoutes>
            </HashRouter>
        </>
    );
}

export default Routes;
