
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

export enum TestReport_ParticipantTypeKind {
                testEngine = 'testEngine',
client = 'client',
server = 'server'
            }
const TestReport_ParticipantTypeKindKeys = t.keyof({
                [TestReport_ParticipantTypeKind.testEngine]: null,
[TestReport_ParticipantTypeKind.client]: null,
[TestReport_ParticipantTypeKind.server]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: TestReport_ParticipantTypeKindKeys,
_type: RTTI_Element,
uri: t.string,
_uri: RTTI_Element,
display: t.string,
_display: RTTI_Element
        });
        

        export var RTTI_TestReport_Participant:any = t.intersection([mandatory, partial]);
        

export type ITestReport_Participant = t.TypeOf<typeof RTTI_TestReport_Participant>;
        
        