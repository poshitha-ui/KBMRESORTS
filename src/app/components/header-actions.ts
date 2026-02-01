import { Component, OnInit, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
    selector: 'app-header-actions',
    template: `
        <div class="card flex justify-center host-menu">
            <p-menu #menu [model]="items" [popup]="true" />
            <p-button severity="secondary" [rounded]="true" (click)="menu.toggle($event)" icon="pi pi-bars" />
        </div>
    `,
    standalone: true,
    imports: [ButtonModule, MenuModule],
    providers: [MessageService],
    styles: `
    :host ::ng-deep .p-motion{
            top: 58px !important;
    z-index: 1199 !important;
    left: 84% !important;
    }
    `
})
export class HeaderActionsModules implements OnInit {
    private messageService = inject(MessageService);
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Reach Us',
                items: [
                    {
                        label: '+1 (800)768-6994',
                        icon: 'pi pi-phone'
                    },
                    { separator: true },
                    {
                        label: 'Live Chat',
                        icon: 'pi pi-info-circle'
                    },
                    { separator: true },
                    {
                        label: 'info@kbmresorts.com',
                        icon: 'pi pi-envelope'
                    },
                    { separator: true },
                    {
                        label: 'Singin or Singup',
                        icon: 'pi pi-user'
                    }
                ]
            }
        ];
    }
}