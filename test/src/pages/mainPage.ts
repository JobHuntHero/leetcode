import {BasePage} from "./basePage";


export class MainPage extends BasePage{

    get signInButton(){
        return this.page.locator("//button[.='Sign In']")
    }
}