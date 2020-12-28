import React from "react";
import { Grid, withStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import routes from './../../router/routes';
import Header from "../../components/navbar/index";
import Footer from "../../components/footer/index";
import MyaccountComponent from "../../components/my_account/index";
import UsermanagementForm from "../../components/usermanagement/modify_user/user_management_form";
import UsermanagementTable from "../../components/usermanagement/modify_user/user_management_table";
import AddUsermanagementForm from "../../components/usermanagement/add_user/index";
import AddUsermanagementTable from "../../components/usermanagement/add_user/table";
import AdvancedUsermanagementForm from "../../components/usermanagement/advanced_search/index";
import AdvancedUsermanagementTable from "../../components/usermanagement/advanced_search/table";
import AddGroupUsermanagementForm from "../../components/group_usermanagement/add_user/index";
import GroupUsermanagementTable from "../../components/group_usermanagement/add_user/table";
import ModifyGroupUsermanagementTable from "../../components/group_usermanagement/modify_user/table";
import ModifyGroupUsermanagementForm from "../../components/group_usermanagement/modify_user/index";
import AdvancedGroupUsermanagementForm from "../../components/group_usermanagement/advanced_search/index";
import AdvancedGroupUsermanagementTable from "../../components/group_usermanagement/advanced_search/table";
import AuditMenu from "../../components/audit_menu/index";
import Welcome from "../../components/welcome/index";
import AuditMenuTable from "../../components/audit_menu/table";
import Changepassword from "../../components/my_account/changes_password";
import UsermanagementeditRole from "../../components/usermanagement/modify_user/edit_user_role";
import SearchComponent from "../../components/group_usermanagement/modify_user/search";
import EditMdifyUsermanagement from "../../components/usermanagement/modify_user/edit_user";
import ViewUsermanagementAdvanced from "../../components/usermanagement/advanced_search/view";
import UsergroupAdvancedSearchComponent from "../../components/group_usermanagement/advanced_search/search";
import Succus from "../../components/usermanagement/add_user/success";
import SuccusUserModify from "../../components/usermanagement/modify_user/success_user_modify";
import SuccusUserGroupAdd from "../../components/group_usermanagement/add_user/success";
import SuccusUserGroupModify from "../../components/group_usermanagement/modify_user/success";
import CheckerdashboardUser from "../../components/checkerDashboardUser/index";
import CheckerdashboardUserEdit from "../../components/checkerDashboardUser/edit";
import CheckerdashboardUserGroup from "../../components/checkerDashboardUserGroup/index";
import CheckerdashboardUserGroupEdit from "../../components/checkerDashboardUserGroup/edit";
import Adduserdashboard from "../../components/usermanagement/dashboard/add_user_dashboard/index";
import AdduserdashboardEdit from "../../components/usermanagement/dashboard/add_user_dashboard/edit";
import Addmodifyuserdashboard from "../../components/usermanagement/dashboard/modify_user_dashboard/index";
import AddmodifyuserdashboardEdit from "../../components/usermanagement/dashboard/modify_user_dashboard/edit";
import Advancesearchuserdashboard from "../../components/usermanagement/dashboard/advanced_search_dashboard/index";
import AdvancesearchuserdashboardEdit from "../../components/usermanagement/dashboard/advanced_search_dashboard/edit";
import Addgroupuserdashboard from "../../components/group_usermanagement/dashboard/add_groupuser_dashboard/index";
import Addgroupuserdashboardedit from "../../components/group_usermanagement/dashboard/add_groupuser_dashboard/edit";
import Modifygroupuserdashboard from "../../components/group_usermanagement/dashboard/modify_groupuser_dashboard/index";
import Modifygroupuserdashboardedit from "../../components/group_usermanagement/dashboard/modify_groupuser_dashboard/edit";
import Advancesearchgroupuserdashboard from "../../components/group_usermanagement/dashboard/advanced_search_dashboard/index";
import Advancesearchgroupuserdashboardedit from "../../components/group_usermanagement/dashboard/advanced_search_dashboard/edit";
// import { localStorageKeys } from './../../utils'

const styles = theme => ({})

class Home extends React.Component {

    // {*----------page inside  child components-----------*}

    giveMeComponentToRender = () => {
        if (this.props.location.pathname === routes.usermanagement || this.props.match.path === routes.usermanagement) {
            return <UsermanagementForm  {...this.props} />;
        } else if (this.props.location.pathname === routes.home || this.props.match.path === routes.home) {
            return <MyaccountComponent  {...this.props} />;
        } else if (this.props.location.pathname === routes.usermanagementtable || this.props.match.path === routes.usermanagementtable) {
            return <UsermanagementTable  {...this.props} />;
        } else if (this.props.location.pathname === routes.welcome || this.props.match.path === routes.welcome) {
            return <Welcome {...this.props} />;
        } else if (this.props.location.pathname === routes.addusermanagementform || this.props.match.path === routes.addusermanagementform) {
            return <AddUsermanagementForm {...this.props} />;
        } else if (this.props.location.pathname === routes.addusermanagementtable || this.props.match.path === routes.addusermanagementtable) {
            return <AddUsermanagementTable {...this.props} />;
        } else if (this.props.location.pathname === routes.advancedusermanagementform || this.props.match.path === routes.advancedusermanagementform) {
            return <AdvancedUsermanagementForm {...this.props} />;
        } else if (this.props.location.pathname === routes.advancedusermanagementtable || this.props.match.path === routes.advancedusermanagementtable) {
            return <AdvancedUsermanagementTable {...this.props} />;
        } else if (this.props.location.pathname === routes.addgroupusermanagementform || this.props.match.path === routes.addgroupusermanagementform) {
            return <AddGroupUsermanagementForm {...this.props} />;
        } else if (this.props.location.pathname === routes.addgroupusermanagementtable || this.props.match.path === routes.addgroupusermanagementtable) {
            return <GroupUsermanagementTable {...this.props} />;
        } else if (this.props.location.pathname === routes.modifygroupusermanagementform || this.props.match.path === routes.modifygroupusermanagementform) {
            return <ModifyGroupUsermanagementForm {...this.props} />;
        } else if (this.props.location.pathname === routes.modifygroupusermanagementtable || this.props.match.path === routes.modifygroupusermanagementtable) {
            return <ModifyGroupUsermanagementTable {...this.props} />;
        } else if (this.props.location.pathname === routes.advancedgroupusermanagementform || this.props.match.path === routes.advancedgroupusermanagementform) {
            return <AdvancedGroupUsermanagementForm {...this.props} />;
        } else if (this.props.location.pathname === routes.advancedgroupusermanagementtable || this.props.match.path === routes.advancedgroupusermanagementtable) {
            return <AdvancedGroupUsermanagementTable {...this.props} />;
        } else if (this.props.location.pathname === routes.audit_menu || this.props.match.path === routes.audit_menu) {
            return <AuditMenu {...this.props} />;
        } else if (this.props.location.pathname === routes.audit_menutable || this.props.match.path === routes.audit_menutable) {
            return <AuditMenuTable {...this.props} />;
        } else if (this.props.location.pathname === routes.Changepassword || this.props.match.path === routes.Changepassword) {
            return <Changepassword {...this.props} />;
        } else if (this.props.location.pathname === routes.UsermanagementeditRole || this.props.match.path === routes.UsermanagementeditRole) {
            return <UsermanagementeditRole {...this.props} />;
        } else if (this.props.location.pathname === routes.SearchComponent || this.props.match.path === routes.SearchComponent) {
            return <SearchComponent {...this.props} />;
        } else if (this.props.location.pathname === routes.EditMdifyUsermanagement || this.props.match.path === routes.EditMdifyUsermanagement) {
            return <EditMdifyUsermanagement {...this.props} />;
        } else if (this.props.location.pathname === routes.ViewUsermanagementAdvanced || this.props.match.path === routes.ViewUsermanagementAdvanced) {
            return <ViewUsermanagementAdvanced {...this.props} />;
        } else if (this.props.location.pathname === routes.UsergroupAdvancedSearchComponent || this.props.match.path === routes.UsergroupAdvancedSearchComponent) {
            return <UsergroupAdvancedSearchComponent {...this.props} />;
        } else if (this.props.location.pathname === routes.Succus || this.props.match.path === routes.Succus) {
            return <Succus {...this.props} />;
        } else if (this.props.location.pathname === routes.Succus_user_modify || this.props.match.path === routes.Succus_user_modify) {
            return <SuccusUserModify {...this.props} />;
        } else if (this.props.location.pathname === routes.SuccusUserGroupAdd || this.props.match.path === routes.SuccusUserGroupAdd) {
            return <SuccusUserGroupAdd {...this.props} />;
        } else if (this.props.location.pathname === routes.SuccusUserGroupModify || this.props.match.path === routes.SuccusUserGroupModify) {
            return <SuccusUserGroupModify {...this.props} />;
        } else if (this.props.location.pathname === routes.CheckerdashboardUser || this.props.match.path === routes.CheckerdashboardUser) {
            return <CheckerdashboardUser {...this.props} />;
        } else if (this.props.location.pathname === routes.CheckerdashboardUserEdit || this.props.match.path === routes.CheckerdashboardUserEdit) {
            return <CheckerdashboardUserEdit {...this.props} />;
        } else if (this.props.location.pathname === routes.CheckerdashboardUserGroup || this.props.match.path === routes.CheckerdashboardUserGroup) {
            return <CheckerdashboardUserGroup {...this.props} />;
        } else if (this.props.location.pathname === routes.CheckerdashboardUserGroupEdit || this.props.match.path === routes.CheckerdashboardUserGroupEdit) {
            return <CheckerdashboardUserGroupEdit {...this.props} />;
        } else if (this.props.location.pathname === routes.Adduserdashboard || this.props.match.path === routes.Adduserdashboard) {
            return <Adduserdashboard {...this.props} />;
        } else if (this.props.location.pathname === routes.AdduserdashboardEdit || this.props.match.path === routes.AdduserdashboardEdit) {
            return <AdduserdashboardEdit {...this.props} />;
        } else if (this.props.location.pathname === routes.Addmodifyuserdashboard || this.props.match.path === routes.Addmodifyuserdashboard) {
            return <Addmodifyuserdashboard {...this.props} />;
        } else if (this.props.location.pathname === routes.AddmodifyuserdashboardEdit || this.props.match.path === routes.AddmodifyuserdashboardEdit) {
            return <AddmodifyuserdashboardEdit {...this.props} />;
        } else if (this.props.location.pathname === routes.Advancesearchuserdashboard || this.props.match.path === routes.Advancesearchuserdashboard) {
            return <Advancesearchuserdashboard {...this.props} />;
        } else if (this.props.location.pathname === routes.AdvancesearchuserdashboardEdit || this.props.match.path === routes.AdvancesearchuserdashboardEdit) {
            return <AdvancesearchuserdashboardEdit {...this.props} />;
        } else if (this.props.location.pathname === routes.Addgroupuserdashboard || this.props.match.path === routes.Addgroupuserdashboard) {
            return <Addgroupuserdashboard {...this.props} />;
        } else if (this.props.location.pathname === routes.Addgroupuserdashboardedit || this.props.match.path === routes.Addgroupuserdashboardedit) {
            return <Addgroupuserdashboardedit {...this.props} />;
        } else if (this.props.location.pathname === routes.Modifygroupuserdashboard || this.props.match.path === routes.Modifygroupuserdashboard) {
            return <Modifygroupuserdashboard {...this.props} />;
        } else if (this.props.location.pathname === routes.Modifygroupuserdashboardedit || this.props.match.path === routes.Modifygroupuserdashboardedit) {
            return <Modifygroupuserdashboardedit {...this.props} />;
        } else if (this.props.location.pathname === routes.Advancesearchgroupuserdashboard || this.props.match.path === routes.Advancesearchgroupuserdashboard) {
            return <Advancesearchgroupuserdashboard {...this.props} />;
        } else if (this.props.location.pathname === routes.Advancesearchgroupuserdashboardedit || this.props.match.path === routes.Advancesearchgroupuserdashboardedit) {
            return <Advancesearchgroupuserdashboardedit {...this.props} />;
        }
    };

    // componentDidMount() {
    //     if (!localStorage.getItem(localStorageKeys.auth_token)) {
    //         this.props.history.push(routes.login);
    //     }
    // }

    render() {
        const { classes } = this.props;
        return (
            <Grid container justify="center" alignItems="center">

                <Grid item xs={12} className={classes.header}>
                    {/* Header component here */}
                    <Header />

                </Grid>

                <Grid item xs={12}>
                    {/* // {*----------inside child components-----------*} */}
                    {this.giveMeComponentToRender()}
                </Grid>

                <Grid item xs={12}>
                    {/* Footer component here */}
                    <Footer />
                </Grid>
            </Grid>
        );
    }
};

export default withStyles(styles)(withRouter(Home));
