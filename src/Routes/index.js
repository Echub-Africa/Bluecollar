import { useRoutes } from "react-router-dom";

import General from "../Layouts/general";
import Home from "../GuestPages/Home";
import Company from "../GuestPages/Company";
import Blog from "../GuestPages/Blog";
import BlogDetail from "../GuestPages/BlogDetails";
import ArtisanSignUp from "../Artisan/SingUp";
import ArtisanSignDashboardLayout from "../Controller/artisanSignController";
import SignUpArtisan from "../Artisan/SignUpPages/SingUpArtisan";
import ArtisanConfirmEmail from "../Artisan/SignUpPages/ConfirmEmail";
import SignUpOwner from "../Artisan/SignUpPages/SignUpOwner";
import SignUpOwnerDetail from "../Artisan/SignUpPages/SignUpOwnerDetail";
import ArtisanLogin from "../Artisan/Login";
import ArtisanPreLogin from "../Artisan/PreLogin";
import ArtisanDashboardLayout from "../Controller/artisanController";
import ArisanHome from "../Artisan/DashboardPages/ArtisanHome";
import ArtisanJobs from "../Artisan/DashboardPages/ArisanJobs";
import ArtisanDetail from "../Artisan/DashboardPages/ArtisanJobDetail";
import Arin from "../GuestPages/ArinOla";
import Artisanreg from "../Artisan/Artisannreg";
import ArtisanLog from "../Artisan/ArtisanLog";
import ArtisanSetting from "../Artisan/DashboardPages/Setting";
import ArtisanMessage from "../Artisan/DashboardPages/ArisanMessage";
import AdminLoginDashboardLayout from "../Admin/AdminLogin/adminLoginController";
import AdminLogin from "../Admin/AdminLogin/AdminLogin";
import AdminDashboardLayout from "../Controller/adminController";
import AdminDashboard from "../Admin/Dashboard";
import AdminRequest from "../Admin/AdminPages/Request";
import RequestDetail from "../Admin/AdminPages/RequestDetails";
import AdminInvoice from "../Admin/AdminPages/Invoice";
import InvoiceDetails from "../Admin/AdminPages/InvoiceDetails";
import AdminJobs from "../Admin/AdminPages/Jobs";
import AdminJobDetail from "../Admin/AdminPages/AdminJobDetails";
import UserManager from "../Admin/AdminPages/UserManager";
import AdminUserDetails from "../Admin/AdminPages/UserDetails";
import AdminNotification from "../Admin/AdminPages/Notification";
import AdminMessage from "../Admin/AdminPages/AdminMessage";
import AdminSetting from "../Admin/AdminPages/AdminSetting";
import Adminonboarding from "../Admin/AdminPages/Onboarding";
import ClientDashboardLayout from "../Controller/clientController";
import ClientHome from "../Client/ClientHome";
import ClientSignDashboardLayout from "../Controller/clientSignContoller";
import SignUpClient from "../Client/ClientLogins/ClientSignUp";
import ClientLogin from "../Client/ClientLogins/ClientLogin";
import ClientJobs from "../Client/ClientJobs";
import ClientJobDetail from "../Client/ClientJobDetails";
import ClientInvoice from "../Client/ClientInvoice";
import ClientRequest from "../Client/ClientRequest";
import ClientRequestDetail from "../Client/ClientRequestDetails";
import ClientSetting from "../Client/ClientSetting";
import ClientMessage from "../Client/ClientMessages";
import ClientConfirmEmail from "../Client/ClientLogins/ClientVerify";

import CompanySignDashboardLayout from "../Controller/companySignContoller.js";
import CompanySignUp from "../company/SIgnUpCompany";
import CompanyLogin from "../company/LoginCompany";


import CompanyDashboardLayout from "../Controller/companyController.js";
import CompanyHome from "../company/CompanyHome";
import CompanyJobDetail from "../company/CompanyJobDetails";
import CompanyInvoice from "../company/CompanyInvoice";
import CompanyRequest from "../company/CompanyRequest";
import CompanyRequestDetail from "../company/CompanyRequestDetails";
import CompanySetting from "../company/CompanySetting";
import CompanyMessage from "../company/CompanyMessages";
import CompanyJobs from "../company/CompanyJobs";
import CompanyConfirmEmail from "../company/CompanyVerify.js";

import ErrorPage from "../GuestPages/NotFound.jsx";







export default function Routess() {
    return(  
    
        useRoutes(
            [
                {
                    path : "/",
                    element: <General />,
                    children:  [
                        {path: "/", element: <Home />},
                        {path: "/about", element: <Company />},
                        {path: "/blog", element: <Blog />},
                        {path: "/blogDetails", element: <BlogDetail />},
                        {path: "/arin", element: <Arin />},
                   
                    ]
                },
                {
                 path : "*",
                element : <ErrorPage />, 
                },

                {
                    path : "/artisanAuth",
                    element: <ArtisanSignDashboardLayout />,
                    children:  [
                        {path: "/artisanAuth/signUp", element: <ArtisanSignUp />},
                        
                        {path: "/artisanAuth/signUpArtisan", element: <SignUpArtisan />},
                        {path: "/artisanAuth/signUpArtisan/ConfirmEmail", element: <ArtisanConfirmEmail />},
                        {path: "/artisanAuth/signUpOwner", element: <SignUpOwner />},
                        {path: "/artisanAuth/ownerOnboarding", element: <SignUpOwnerDetail />},
                        {path: "/artisanAuth/login/Artisan", element: <ArtisanLogin />},
                        {path: "/artisanAuth/login", element: <ArtisanPreLogin />},
                    ]
                },


                  {
                    path : "/companyAuth",
                    element: <CompanySignDashboardLayout />,
                    children:  [
                        {path: "/companyAuth/signUp", element: <CompanySignUp />},

                         {path: "/companyAuth/login", element: <CompanyLogin />},
                        
                      
                    ]
                },


                {
                    path : "/clientAuth",
                    element: <ClientSignDashboardLayout />,
                    children:  [
                        {path: "/clientAuth/signUp", element: <SignUpClient />},
                        
                        {path: "/clientAuth/login", element: <ClientLogin />},
                        {path: "/clientAuth/confirmEmail", element: <ClientConfirmEmail />},
                    ]
                },

                {
                    path : "/adminAuth",
                    element: <AdminLoginDashboardLayout />,
                    children:  [
                        {path: "/adminAuth/Login", element: <AdminLogin />},
                      
                    ]
                },

                {
                    path : "/artisan",
                    element: <ArtisanDashboardLayout />,
                    children:  [
                        {path: "/artisan", element: <ArisanHome />},
                        {path: "/artisan/jobs", element: <ArtisanJobs/>},
                        {path: "/artisan/jobs/details/:id", element: <ArtisanDetail/>},
                        {path: "/artisan/settings", element: <ArtisanSetting/>},
                        {path: "/artisan/messages", element: <ArtisanMessage/>},
                        {path: "/artisan/artisanreg", element: <Artisanreg />},
                        {path: "/artisan/artisanLog", element: <ArtisanLog />},

                    ]
                },

                                {
                    path : "/company",
                    element: <CompanyDashboardLayout />,
                    children:  [
                        {path: "/company", element: <CompanyHome />},
                        {path: "/company/jobs", element: <CompanyJobs />},
                        {path: "/company/invoice", element: <CompanyInvoice />},
                        {path: "/company/messages", element: <CompanyMessage />},
                        {path: "/company/request", element: <CompanyRequest />},
                        {path: "/company/setting", element: <CompanySetting />},
                        {path: "/company/jobs/details/:id", element: <CompanyJobDetail />},
                        {path: "/company/request/details/:id", element: <CompanyRequestDetail />},
                        {path: "/company/confirmEmail", element: <CompanyConfirmEmail />}
                    ]
                },

                {
                    path : "/client",
                    element: <ClientDashboardLayout />,
                    children:  [
                        {path: "/client", element: <ClientHome />},
                        {path: "/client/jobs", element: <ClientJobs />},
                        {path: "/client/invoice", element: <ClientInvoice />},
                        {path: "/client/messages", element: <ClientMessage />},
                        {path: "/client/request", element: <ClientRequest />},
                        {path: "/client/setting", element: <ClientSetting />},
                        {path: "/client/jobs/details/:id", element: <ClientJobDetail />},
                        {path: "/client/request/details/:id", element: <ClientRequestDetail />},
                    ]
                },

                {
                    path : "/admin",
                    element: <AdminDashboardLayout />,
                    children:  [
                        {path: "/admin", element: <AdminDashboard />},
                        {path: "/admin/request", element: <AdminRequest />},
                        {path: "/admin/invoice", element: <AdminInvoice />},
                        {path: "/admin/jobs", element: <AdminJobs />},
                        {path: "/admin/users", element: <UserManager />},
                        {path: "/admin/settings", element: <AdminSetting />},
                        {path: "/admin/messages", element: <AdminMessage />},
                        {path: "/admin/notifications", element: <AdminNotification />},
                        {path: "/admin/jobs/details/:id", element: <AdminJobDetail />},
                        {path: "/admin/users/details/:id", element: <AdminUserDetails />},
                        {path: "/admin/invoice/:id", element: <InvoiceDetails />}, 
                        {path: "/admin/request/details/:id", element: <RequestDetail />},
                        {path: "/admin/onboarding", element: <Adminonboarding />}

                    ]
                },
                
            ]
        )

    
 
    )
}