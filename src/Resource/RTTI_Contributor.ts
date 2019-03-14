
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_ContactDetail} from './RTTI_ContactDetail';

export enum ContributorTypeKind {
                author = 'author',
editor = 'editor',
reviewer = 'reviewer',
endorser = 'endorser'
            }
const ContributorTypeKindKeys = t.keyof({
                [ContributorTypeKind.author]: null,
[ContributorTypeKind.editor]: null,
[ContributorTypeKind.reviewer]: null,
[ContributorTypeKind.endorser]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
type: ContributorTypeKindKeys,
_type: RTTI_Element,
name: t.string,
_name: RTTI_Element,
contact: t.array(RTTI_ContactDetail)
        });
        

        export var RTTI_Contributor:any = t.intersection([mandatory, partial]);
        

export type IContributor = t.TypeOf<typeof RTTI_Contributor>;
        
        