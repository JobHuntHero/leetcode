import {BasePage} from "./basePage";


export class MainPage extends BasePage{

    get vercelLogo(){
        return this.page.locator('[data-testid="vercel-logo"]')
    }
}