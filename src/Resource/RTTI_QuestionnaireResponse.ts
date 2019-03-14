
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_QuestionnaireResponse_Item} from './RTTI_QuestionnaireResponse_Item';

export enum QuestionnaireResponseStatusKind {
                inProgress = 'inProgress',
completed = 'completed',
amended = 'amended',
enteredInError = 'enteredInError',
stopped = 'stopped'
            }
const QuestionnaireResponseStatusKindKeys = t.keyof({
                [QuestionnaireResponseStatusKind.inProgress]: null,
[QuestionnaireResponseStatusKind.completed]: null,
[QuestionnaireResponseStatusKind.amended]: null,
[QuestionnaireResponseStatusKind.enteredInError]: null,
[QuestionnaireResponseStatusKind.stopped]: null
            });


        const mandatory = t.type({
           resourceType: t.string
        });
        

        const partial = t.partial({
            id: t.string,
meta: RTTI_Meta,
implicitRules: t.string,
_implicitRules: RTTI_Element,
language: t.string,
_language: RTTI_Element,
text: RTTI_Narrative,
contained: t.array(ResourceList),
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identifier: RTTI_Identifier,
basedOn: t.array(RTTI_Reference),
partOf: t.array(RTTI_Reference),
questionnaire: t.string,
status: QuestionnaireResponseStatusKindKeys,
_status: RTTI_Element,
subject: RTTI_Reference,
context: RTTI_Reference,
authored: t.string,
_authored: RTTI_Element,
author: RTTI_Reference,
source: RTTI_Reference,
item: t.array(RTTI_QuestionnaireResponse_Item)
        });
        

        export var RTTI_QuestionnaireResponse:any = t.intersection([mandatory, partial]);
        

export type IQuestionnaireResponse = t.TypeOf<typeof RTTI_QuestionnaireResponse>;
        
        