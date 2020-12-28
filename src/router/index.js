import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import routes from "./routes";
import PrivateRoute from "./private_router";
import ErrorPage from "../components/error_page/index";
import {
    Login,
    SignUp,
    Home,
    Profile
} from './../screens';

const RouterApp = (props) => {
    return <Router>
        <Switch>
            {/* redirect page component(login) */}
            <Route exact path="/" component={Login} />
            {/* end */}

            {/* login component */}
            <Route path={routes.login} component={Login} />
            {/* end */}

            {/* signup component */}
            <Route path={routes.signup} component={SignUp} />
            {/* end */}

            {/* home component */}
            <Route path={routes.home} component={Home} />
            {/* end */}

            {/* Checker dashboard */}
            <Route path={routes.CheckerdashboardUser} component={Home} />
            <Route path={routes.CheckerdashboardUserEdit} component={Home} />
            {/* end */}

            {/* Checker group dashboard */}
            <Route path={routes.CheckerdashboardUserGroup} component={Home} />
            <Route path={routes.CheckerdashboardUserGroupEdit} component={Home} />
            {/* end */}

            {/* welcome component */}
            <Route path={routes.welcome} component={Home} />
            {/* end */}

            {/* audit component */}
            <Route path={routes.audit_menu} component={Home} />
            <Route path={routes.audit_menutable} component={Home} />
            {/* end */}

            {/* Error Page component */}
            <Route path={routes.ErrorPage} component={ErrorPage} />
            {/* end */}

            {/* Change password component */}
            <Route path={routes.Changepassword} component={Home} />
            {/* end */}

            {/* user management component */}
            <Route path={routes.usermanagement} component={Home} />
            <Route path={routes.EditMdifyUsermanagement} component={Home} />
            <Route path={routes.UsermanagementeditRole} component={Home} />
            <Route path={routes.addusermanagementform} component={Home} />
            <Route path={routes.addusermanagementtable} component={Home} />
            <Route path={routes.usermanagementtable} component={Home} />
            <Route path={routes.advancedusermanagementform} component={Home} />
            <Route path={routes.ViewUsermanagementAdvanced} component={Home} />
            <Route path={routes.advancedusermanagementtable} component={Home} />
            <Route path={routes.Succus} component={Home} />
            <Route path={routes.Succus_user_modify} component={Home} />
            {/* dashboard */}
            <Route path={routes.Adduserdashboard} component={Home} />
            <Route path={routes.AdduserdashboardEdit} component={Home} />

            <Route path={routes.Addmodifyuserdashboard} component={Home} />
            <Route path={routes.AddmodifyuserdashboardEdit} component={Home} />

            <Route path={routes.Advancesearchuserdashboard} component={Home} />
            <Route path={routes.AdvancesearchuserdashboardEdit} component={Home} />
            {/* end */}
            {/* end */}

            {/* profile component */}
            <PrivateRoute path={routes.profile} component={Profile} />
            {/* end */}

            {/* user group management component */}
            <Route path={routes.SearchComponent} component={Home} />
            <Route path={routes.addgroupusermanagementform} component={Home} />
            <Route path={routes.addgroupusermanagementtable} component={Home} />
            <Route path={routes.modifygroupusermanagementform} component={Home} />
            <Route path={routes.modifygroupusermanagementtable} component={Home} />
            <Route path={routes.advancedgroupusermanagementform} component={Home} />
            <Route path={routes.advancedgroupusermanagementtable} component={Home} />
            <Route path={routes.UsergroupAdvancedSearchComponent} component={Home} />
            <Route path={routes.SuccusUserGroupAdd} component={Home} />
            <Route path={routes.SuccusUserGroupModify} component={Home} />

            {/* dashboard */}
            <Route path={routes.Addgroupuserdashboard} component={Home} />
            <Route path={routes.Addgroupuserdashboardedit} component={Home} />
            <Route path={routes.Modifygroupuserdashboard} component={Home} />
            <Route path={routes.Modifygroupuserdashboardedit} component={Home} />
            <Route path={routes.Advancesearchgroupuserdashboard} component={Home} />
            <Route path={routes.Advancesearchgroupuserdashboardedit} component={Home} />
            {/* end */}
            {/* end */}
        </Switch>
    </Router>
}

export default RouterApp;