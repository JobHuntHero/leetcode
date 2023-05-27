import type {Page} from '@playwright/test'

export class BasePage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open(url:string, path?:string){
        if(typeof path === 'undefined'){
            await this.page.goto(url);
        }else{
            await this.page.goto(url+path);
        }
    }
}