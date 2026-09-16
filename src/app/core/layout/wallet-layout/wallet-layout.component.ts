import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletLayoutHeaderComponent } from './wallet-layout-header/wallet-layout-header.component';
import { environment } from 'src/environments/environment';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'vc-wallet-layout',
    imports: [CommonModule, WalletLayoutHeaderComponent, TranslatePipe],
    templateUrl: './wallet-layout.component.html',
    styleUrls: ['./wallet-layout.component.scss']
})
export class WalletLayoutComponent {
    environment = environment;
}
