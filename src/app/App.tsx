import 'shared/tailwind-configs/index.css';
import routers from 'app/routers';
import { ErrorBoundary } from 'react-error-boundary';
import { RouterProvider } from 'react-router';

function App() {
    return (
        <ErrorBoundary fallback={<div>Something Went Wrong</div>}>
            <RouterProvider router={routers} />
        </ErrorBoundary>
    );
}

export default App;

//
// <div className="tracking-[1] ml-5">
//         <h1>hello world</h1>
// <Button variant="contained" icon="weui:arrow-outlined" iconPlacement="start"
//         className="">Button</Button>
// <br/>
// <br/>
// <Button variant="outlined" icon="weui:arrow-outlined" iconPlacement="end" className="">Button</Button>
// <br/>
// <br/>
// <Button variant="text" icon="weui:arrow-outlined" className="" iconSize={16}>Button</Button>
// </div>
