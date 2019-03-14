
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Duration} from './RTTI_Duration';
import {RTTI_Range} from './RTTI_Range';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_Element} from './RTTI_Element';



export enum Timing_RepeatWhenKind {
                morn = 'morn',
mornEarly = 'mornEarly',
mornLate = 'mornLate',
noon = 'noon',
aft = 'aft',
aftEarly = 'aftEarly',
aftLate = 'aftLate',
eve = 'eve',
eveEarly = 'eveEarly',
eveLate = 'eveLate',
night = 'night',
phs = 'phs',
hs = 'hs',
wake = 'wake',
c = 'c',
cm = 'cm',
cd = 'cd',
cv = 'cv',
ac = 'ac',
acm = 'acm',
acd = 'acd',
acv = 'acv',
pc = 'pc',
pcm = 'pcm',
pcd = 'pcd',
pcv = 'pcv'
            }
export enum Timing_RepeatDurationUnitKind {
                s = 's',
min = 'min',
h = 'h',
d = 'd',
wk = 'wk',
mo = 'mo',
a = 'a'
            }
export enum Timing_RepeatPeriodUnitKind {
                s = 's',
min = 'min',
h = 'h',
d = 'd',
wk = 'wk',
mo = 'mo',
a = 'a'
            }
const Timing_RepeatWhenKindKeys = t.keyof({
                [Timing_RepeatWhenKind.morn]: null,
[Timing_RepeatWhenKind.mornEarly]: null,
[Timing_RepeatWhenKind.mornLate]: null,
[Timing_RepeatWhenKind.noon]: null,
[Timing_RepeatWhenKind.aft]: null,
[Timing_RepeatWhenKind.aftEarly]: null,
[Timing_RepeatWhenKind.aftLate]: null,
[Timing_RepeatWhenKind.eve]: null,
[Timing_RepeatWhenKind.eveEarly]: null,
[Timing_RepeatWhenKind.eveLate]: null,
[Timing_RepeatWhenKind.night]: null,
[Timing_RepeatWhenKind.phs]: null,
[Timing_RepeatWhenKind.hs]: null,
[Timing_RepeatWhenKind.wake]: null,
[Timing_RepeatWhenKind.c]: null,
[Timing_RepeatWhenKind.cm]: null,
[Timing_RepeatWhenKind.cd]: null,
[Timing_RepeatWhenKind.cv]: null,
[Timing_RepeatWhenKind.ac]: null,
[Timing_RepeatWhenKind.acm]: null,
[Timing_RepeatWhenKind.acd]: null,
[Timing_RepeatWhenKind.acv]: null,
[Timing_RepeatWhenKind.pc]: null,
[Timing_RepeatWhenKind.pcm]: null,
[Timing_RepeatWhenKind.pcd]: null,
[Timing_RepeatWhenKind.pcv]: null
            });
const Timing_RepeatDurationUnitKindKeys = t.keyof({
                [Timing_RepeatDurationUnitKind.s]: null,
[Timing_RepeatDurationUnitKind.min]: null,
[Timing_RepeatDurationUnitKind.h]: null,
[Timing_RepeatDurationUnitKind.d]: null,
[Timing_RepeatDurationUnitKind.wk]: null,
[Timing_RepeatDurationUnitKind.mo]: null,
[Timing_RepeatDurationUnitKind.a]: null
            });
const Timing_RepeatPeriodUnitKindKeys = t.keyof({
                [Timing_RepeatPeriodUnitKind.s]: null,
[Timing_RepeatPeriodUnitKind.min]: null,
[Timing_RepeatPeriodUnitKind.h]: null,
[Timing_RepeatPeriodUnitKind.d]: null,
[Timing_RepeatPeriodUnitKind.wk]: null,
[Timing_RepeatPeriodUnitKind.mo]: null,
[Timing_RepeatPeriodUnitKind.a]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
boundsDuration: RTTI_Duration,
boundsRange: RTTI_Range,
boundsPeriod: RTTI_Period,
count: t.number,
_count: RTTI_Element,
countMax: t.number,
_countMax: RTTI_Element,
duration: t.number,
_duration: RTTI_Element,
durationMax: t.number,
_durationMax: RTTI_Element,
durationUnit: Timing_RepeatDurationUnitKindKeys,
_durationUnit: RTTI_Element,
frequency: t.number,
_frequency: RTTI_Element,
frequencyMax: t.number,
_frequencyMax: RTTI_Element,
period: t.number,
_period: RTTI_Element,
periodMax: t.number,
_periodMax: RTTI_Element,
periodUnit: Timing_RepeatPeriodUnitKindKeys,
_periodUnit: RTTI_Element,
dayOfWeek: t.array(t.string),
_dayOfWeek: t.array(RTTI_Element),
timeOfDay: t.array(t.string),
_timeOfDay: t.array(RTTI_Element),
when: t.array(Timing_RepeatWhenKindKeys),
_when: t.array(RTTI_Element),
offset: t.number,
_offset: RTTI_Element
        });
        

        export var RTTI_Timing_Repeat:any = t.intersection([mandatory, partial]);
        

export type ITiming_Repeat = t.TypeOf<typeof RTTI_Timing_Repeat>;
        
        