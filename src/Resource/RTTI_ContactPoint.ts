
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Period} from './RTTI_Period';

export enum ContactPointSystemKind {
                phone = 'phone',
fax = 'fax',
email = 'email',
pager = 'pager',
url = 'url',
sms = 'sms',
other = 'other'
            }
export enum ContactPointUseKind {
                home = 'home',
work = 'work',
temp = 'temp',
old = 'old',
mobile = 'mobile'
            }
const ContactPointSystemKindKeys = t.keyof({
                [ContactPointSystemKind.phone]: null,
[ContactPointSystemKind.fax]: null,
[ContactPointSystemKind.email]: null,
[ContactPointSystemKind.pager]: null,
[ContactPointSystemKind.url]: null,
[ContactPointSystemKind.sms]: null,
[ContactPointSystemKind.other]: null
            });
const ContactPointUseKindKeys = t.keyof({
                [ContactPointUseKind.home]: null,
[ContactPointUseKind.work]: null,
[ContactPointUseKind.temp]: null,
[ContactPointUseKind.old]: null,
[ContactPointUseKind.mobile]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
system: ContactPointSystemKindKeys,
_system: RTTI_Element,
value: t.string,
_value: RTTI_Element,
use: ContactPointUseKindKeys,
_use: RTTI_Element,
rank: t.number,
_rank: RTTI_Element,
period: RTTI_Period
        });
        

        export var RTTI_ContactPoint:any = t.intersection([mandatory, partial]);
        

export type IContactPoint = t.TypeOf<typeof RTTI_ContactPoint>;
        
        