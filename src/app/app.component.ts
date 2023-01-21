import { Component } from '@angular/core';
import { INavData } from '@coreui/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'businessdash';
  navItems: INavData[] = [
    {
      name: 'Dashboard',
    },
  ];
  constructor() {
    interface INavAttributes {
      [propName: string]: any;
    }

    interface INavWrapper {
      attributes: INavAttributes;
      element: string;
    }

    interface INavBadge {
      text: string;
      color: string;
      size?: string;
      class?: string;
    }

    interface INavLabel {
      class?: string;
      variant: string;
    }

    interface INavLinkProps {
      queryParams?: { [k: string]: any };
      fragment?: string;
      queryParamsHandling?: 'merge' | 'preserve' | '';
      preserveFragment?: boolean;
      skipLocationChange?: boolean;
      replaceUrl?: boolean;
      state?: { [k: string]: any };
      routerLinkActiveOptions?: { exact: boolean };
      routerLinkActive?: string | string[];
    }

    interface INavData {
      name?: string;
      url?: string | any[];
      href?: string;
      icon?: string;
      iconComponent?: any;
      badge?: INavBadge;
      title?: boolean;
      children?: INavData[];
      variant?: string;
      attributes?: INavAttributes;
      divider?: boolean;
      class?: string;
      label?: INavLabel;
      wrapper?: INavWrapper;
      linkProps?: INavLinkProps;
    }
  }
}
