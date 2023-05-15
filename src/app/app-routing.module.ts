import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'slider',
    pathMatch: 'full'
  },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m=> m.LoginPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'slider',
    loadChildren: () => import('./slider/slider.module').then( m => m.SliderPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register/register.module').then( m => m.RegisterPageModule)
  },
  // {
  //   path: 'forgetpsw',
  //   loadChildren: () => import('./login/resetpsw/forgetpsw/forgetpsw.module').then( m => m.ForgetpswPageModule)
  // },
  // {
  //   path: 'newpsw',
  //   loadChildren: () => import('./login/resetpsw/newpsw/newpsw.module').then( m => m.NewpswPageModule)
  // },
  {
    path: 'otp',
    loadChildren: () => import('./register/otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'mobile-login',
    loadChildren: () => import('./DashbackLogin/mobile-login/mobile-login.module').then( m => m.MobileLoginPageModule)
  },
  {
    path: 'emailotp',
    loadChildren: () => import('./register/emailotp/emailotp.module').then( m => m.EmailotpPageModule)
  },
  {
    path: 'psdchange',
    loadChildren: () => import('./DashbackLogin/resetpsw/successfully/psdchange.module').then( m => m.PsdchangePageModule)
  },
  {
    path: 'createaccount',
    loadChildren: () => import('./register/regsuccessfully/createaccount.module').then( m => m.CreateaccountPageModule)
  },
  // {
  //   path: 'email-mobile-otp',
  //   loadChildren: () => import('.//login/resetpsw/email-mobile-otp/email-mobile-otp.module').then( m => m.EmailMobileOtpPageModule)
  // },
  {
    path: 'home',
    loadChildren: () => import('./home2/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tred',
    loadChildren: () => import('./home2/tred/tred.module').then( m => m.TredPageModule)
  },
  {
    path: 'store',
    loadChildren: () => import('./home2/e-commerce/store/store.module').then( m => m.StorePageModule)
  },
  {
    path: 'utilities',
    loadChildren: () => import('./home2/utilities/utilities.module').then( m => m.UtilitiesPageModule)
  },
  {
    path: 'redirect',
    loadChildren: () => import('./home2/e-commerce/redirect/redirect.module').then( m => m.RedirectPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./home2/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'refer',
    loadChildren: () => import('./home2/refer/refer.module').then( m => m.ReferPageModule)
  },
  {
    path: 'commingsoon',
    loadChildren: () => import('./home2/commingsoon/commingsoon.module').then( m => m.CommingsoonPageModule)
  },
  {
    path: 'allservice',
    loadChildren: () => import('./home2/allservice/allservice.module').then( m => m.AllservicePageModule)
  },
  {
    path: 'myteam',
    loadChildren: () => import('./home2/sidebar/myteam/myteam.module').then( m => m.MyteamPageModule)
  },
  {
    path: 'premium',
    loadChildren: () => import('./home2/sidebar/premium/premium.module').then( m => m.PremiumPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./home2/setting/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'address',
    loadChildren: () => import('./home2/setting/address/address.module').then( m => m.AddressPageModule)
  },
  {
    path: 'sequirityprivacy',
    loadChildren: () => import('./home2/setting/sequirityprivacy/sequirityprivacy.module').then( m => m.SequirityprivacyPageModule)
  },
  {
    path: 'mange-notification',
    loadChildren: () => import('./home2/setting/mange-notification/mange-notification.module').then( m => m.MangeNotificationPageModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./home2/setting/language/language.module').then( m => m.LanguagePageModule)
  },
  {
    path: 'profile2',
    loadChildren: () => import('./home2/setting/profile2/profile2.module').then( m => m.Profile2PageModule)
  },
  {
    path: 'start-plan',
    loadChildren: () => import('./home2/newPlan/start-plan/start-plan.module').then( m => m.StartPlanPageModule)
  },
  {
    path: 'start-deposit',
    loadChildren: () => import('./home2/newPlan/start-deposit/start-deposit.module').then( m => m.StartDepositPageModule)
  },
  {
    path: 'add-nominee',
    loadChildren: () => import('./home2/newPlan/add-nominee/add-nominee.module').then( m => m.AddNomineePageModule)
  },
  {
    path: 'add-plan',
    loadChildren: () => import('./home2/newPlan/add-plan/add-plan.module').then( m => m.AddPlanPageModule)
  },
  {
    path: 'reciept',
    loadChildren: () => import('./home2/newPlan/reciept/reciept.module').then( m => m.RecieptPageModule)
  },
  {
    path: 'transfer-reciept',
    loadChildren: () => import('./home2/newPlan/transfer-reciept/transfer-reciept.module').then( m => m.TransferRecieptPageModule)
  },
  {
    path: 'transaction-failed',
    loadChildren: () => import('./home2/newPlan/transaction-failed/transaction-failed.module').then( m => m.TransactionFailedPageModule)
  },
  {
    path: 'dth-provider',
    loadChildren: () => import('./home2/DTH/dth-provider/dth-provider.module').then( m => m.DthProviderPageModule)
  },
  {
    path: 'airteldigital',
    loadChildren: () => import('./home2/DTH/airteldigital/airteldigital.module').then( m => m.AirteldigitalPageModule)
  },
  {
    path: 'airteldigital2',
    loadChildren: () => import('./home2/DTH/airteldigital2/airteldigital2.module').then( m => m.Airteldigital2PageModule)
  },
  {
    path: 'gas-bill',
    loadChildren: () => import('./home2/bills/gas/gas-bill/gas-bill.module').then( m => m.GasBillPageModule)
  },
  {
    path: 'gas-bill2',
    loadChildren: () => import('./home2/bills/gas/gas-bill2/gas-bill2.module').then( m => m.GasBill2PageModule)
  },
  {
    path: 'gas-bill3',
    loadChildren: () => import('./home2/bills/gas/gas-bill3/gas-bill3.module').then( m => m.GasBill3PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
