
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Coding} from './RTTI_Coding';
import {RTTI_Questionnaire_EnableWhen} from './RTTI_Questionnaire_EnableWhen';
import {RTTI_Questionnaire_AnswerOption} from './RTTI_Questionnaire_AnswerOption';
import {RTTI_Questionnaire_Initial} from './RTTI_Questionnaire_Initial';

export enum Questionnaire_ItemTypeKind {
                group = 'group',
display = 'display',
boolean = 'boolean',
decimal = 'decimal',
integer = 'integer',
date = 'date',
dateTime = 'dateTime',
time = 'time',
string = 'string',
text = 'text',
url = 'url',
choice = 'choice',
openChoice = 'openChoice',
attachment = 'attachment',
reference = 'reference',
quantity = 'quantity'
            }
export enum Questionnaire_ItemEnableBehaviorKind {
                all = 'all',
any = 'any'
            }
const Questionnaire_ItemTypeKindKeys = t.keyof({
                [Questionnaire_ItemTypeKind.group]: null,
[Questionnaire_ItemTypeKind.display]: null,
[Questionnaire_ItemTypeKind.boolean]: null,
[Questionnaire_ItemTypeKind.decimal]: null,
[Questionnaire_ItemTypeKind.integer]: null,
[Questionnaire_ItemTypeKind.date]: null,
[Questionnaire_ItemTypeKind.dateTime]: null,
[Questionnaire_ItemTypeKind.time]: null,
[Questionnaire_ItemTypeKind.string]: null,
[Questionnaire_ItemTypeKind.text]: null,
[Questionnaire_ItemTypeKind.url]: null,
[Questionnaire_ItemTypeKind.choice]: null,
[Questionnaire_ItemTypeKind.openChoice]: null,
[Questionnaire_ItemTypeKind.attachment]: null,
[Questionnaire_ItemTypeKind.reference]: null,
[Questionnaire_ItemTypeKind.quantity]: null
            });
const Questionnaire_ItemEnableBehaviorKindKeys = t.keyof({
                [Questionnaire_ItemEnableBehaviorKind.all]: null,
[Questionnaire_ItemEnableBehaviorKind.any]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
linkId: t.string,
_linkId: RTTI_Element,
definition: t.string,
_definition: RTTI_Element,
code: t.array(RTTI_Coding),
prefix: t.string,
_prefix: RTTI_Element,
text: t.string,
_text: RTTI_Element,
type: Questionnaire_ItemTypeKindKeys,
_type: RTTI_Element,
enableWhen: t.array(RTTI_Questionnaire_EnableWhen),
enableBehavior: Questionnaire_ItemEnableBehaviorKindKeys,
_enableBehavior: RTTI_Element,
required: t.boolean,
_required: RTTI_Element,
repeats: t.boolean,
_repeats: RTTI_Element,
readOnly: t.boolean,
_readOnly: RTTI_Element,
maxLength: t.number,
_maxLength: RTTI_Element,
answerValueSet: t.string,
answerOption: t.array(RTTI_Questionnaire_AnswerOption),
initial: t.array(RTTI_Questionnaire_Initial),
item: t.array(RTTI_Questionnaire_Item)
        });
        

        export var RTTI_Questionnaire_Item:any = t.intersection([mandatory, partial]);
        

export type IQuestionnaire_Item = t.TypeOf<typeof RTTI_Questionnaire_Item>;
        
        