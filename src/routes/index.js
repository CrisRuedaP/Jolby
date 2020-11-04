import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "../App";

//Component to define single page paths 

function Root() {
	return (
		<Router>
			<Switch>
				<Route path="/" component={App} />
			</Switch>
		</Router>
	);
}

export default Root;
