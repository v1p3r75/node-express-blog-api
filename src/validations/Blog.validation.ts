import * as Yup from "yup";



export const createBlogValidation = Yup.object({
    'title': string().required().max(255),
    'content': string().required(),

});