import { tags } from './tags.model';
import { paymentType } from './payment-type.model';
import { category } from './category.model';
import { productLang } from './product-lang.model';
export interface Product{
    _id?:number,
    data:productLang[],
    price:Number,
    discount?:Number,
    imageUrls:string[],
    count:number,
    category: category,
    paymentype: paymentType[],
    tags: tags[],

}