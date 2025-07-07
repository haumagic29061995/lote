<script setup lang="ts">
import { getLote45, getLote55 } from '@/composables/lote.ts'
import {
  LoteObject,
  type ApearType,
  type CombineCountType,
  type CombineType,
  type ConsecutiveGroup,
} from '@/types/lote'
import { generateOptions, findAllConsecutiveValueGroups } from '@/utils'
import _ from 'lodash'
import { ref } from 'vue'
// DATA
const listData45: Array<LoteObject> = getLote45()
const listData55: Array<LoteObject> = getLote55()
const feature_3_combine_count_45 = ref<CombineCountType[]>([])
const feature_3_combine_count_55 = ref<CombineCountType[]>([])
const maxLength = listData45.length
const totalOptions = ref<number[]>([])
const totalSelected = ref<number>(1)
totalOptions.value = generateOptions(maxLength)

const predictionLoteType: number = listData45[0].date > listData55[0].date ? 55 : 45
const offsetLoteType55: number = predictionLoteType === 55 ? 0 : -1
const offsetLoteType45: number = predictionLoteType === 45 ? 0 : -1

fromIndex(listData45, offsetLoteType45)
fromIndex(listData55, offsetLoteType55)

const listData45Render = ref<Array<LoteObject>>()
listData45Render.value = listData45

const listData55Render = ref<Array<LoteObject>>()
listData55Render.value = listData55

const feature_1_model = ref<boolean>(false)
const feature_2_model = ref<boolean>(false)
const feature_3_model = ref<boolean>(false)
const feature_4_model = ref<boolean>(false)

console.log(listData45)
console.log(listData55)
/**
 * Feature 1
 */
function feature_1(
  listData: Array<LoteObject>,
  element: LoteObject,
  element2: LoteObject | undefined,
  i: number,
) {
  element.numberResult.forEach((num: string) => {
    const idx: number = Number(num) + i
    const elementItem: LoteObject = listData[idx]
    if (elementItem) {
      // feature_1_rowElement
      element.feature_1_rowElement.push(elementItem.numberResult)
      elementItem.numberResult.forEach((num2: string) => {
        // feature_1_setArrray_1
        element.feature_1_setArrray_1.add(num2)
        // feature_1_two_list
        element.feature_1_two_list.add(num2)
        // feature_1_two_list_number_apear
        const findItem = element.feature_1_two_list_number_apear.find(
          (item) => item.number === num2,
        )
        if (findItem) {
          findItem.total++
        } else {
          const numberApear: ApearType = {
            number: num2,
            total: 1,
            isResult: element.nextItem?.numberResult.includes(num2) || false,
            isResult2: element?.extraNumber === num2,
          }
          element.feature_1_two_list_number_apear.push(numberApear)
        }
      })
    }
  })
  // opposite element
  if (element2) {
    element2.numberResult.forEach((num: string) => {
      const idx: number = Number(num) + i
      const elementItem: LoteObject = listData[idx]
      if (elementItem) {
        // feature_1_rowElement
        element.feature_1_rowElement.push(elementItem.numberResult)
        elementItem.numberResult.forEach((num2: string) => {
          // feature_1_setArrray_2
          element.feature_1_setArrray_2.add(num2)
          // feature_1_two_list
          element.feature_1_two_list.add(num2)
          // feature_1_two_list_number_apear
          const findItem = element.feature_1_two_list_number_apear.find(
            (item) => item.number === num2,
          )
          if (findItem) {
            findItem.total++
          } else {
            const numberApear: ApearType = {
              number: num2,
              total: 1,
              isResult: element.nextItem?.numberResult.includes(num2) || false,
              isResult2: element.nextItem?.extraNumber === num2,
            }
            element.feature_1_two_list_number_apear.push(numberApear)
          }
        })
      }
    })
  }
  // feature_1_setArrray_1_diff_setArrray_2
  element.feature_1_setArrray_1.forEach((num) => {
    if (!element.feature_1_setArrray_2.has(num)) {
      element.feature_1_setArrray_1_diff_setArrray_2.add(num)
    } else {
      element.feature_1_union_two_list.add(num)
    }
  })
  // feature_1_setArrray_2_diff_setArrray_1
  element.feature_1_setArrray_2.forEach((num) => {
    if (!element.feature_1_setArrray_1.has(num)) {
      element.feature_1_setArrray_2_diff_setArrray_1.add(num)
    } else {
      element.feature_1_union_two_list.add(num)
    }
  })
  // feature_1_two_list
  element.feature_1_two_list.forEach((num) => {
    if (!element.feature_1_union_two_list.has(num)) {
      element.feature_1_two_not_union.add(num)
    }
  })
}
//// end funtion feature_1

/**
 * feature_2
 */
function feature_2(
  listData: Array<LoteObject>,
  element: LoteObject,
  element2: LoteObject | undefined,
  i: number,
) {
  for (let index = i; index < listData.length; index++) {
    const nextElement: LoteObject = listData[index]
    if (element.numberResult.filter((num) => nextElement.numberResult.includes(num)).length === 3) {
      if (index - 1 !== i) {
        const nextEl: LoteObject = listData[index - 1]
        element.feature_2_same3Element.push(nextEl.numberResult)
      }
    }
  }
  if (!element.nextItem) {
    return
  }
  let listCompare: string[] = [...(element.nextItem?.numberResult || [])]
  for (let index = i; index < listData.length; index++) {
    const nextElement: LoteObject = listData[index]
    element.feature_2_rowElement.push(nextElement.numberResult)
    if (element.nextItem?.numberResult.some((num) => nextElement.numberResult.includes(num))) {
      listCompare = listCompare.filter((num) => !nextElement.numberResult.includes(num))
      if (listCompare.length === 0) {
        break
      }
    }
  }
}
//// end function feature_2

/**
 * feature_3
 */
function feature_3(
  listData: Array<LoteObject>,
  element: LoteObject,
  element2: LoteObject | undefined,
  i: number,
) {
  const feature_3_combine_count =
    element.loteType === 45 ? feature_3_combine_count_45.value : feature_3_combine_count_55.value
  for (let index = i + 1; index < listData.length; index++) {
    const nextElement: LoteObject = listData[index]
    const k = element.numberResult.filter((num) => nextElement.numberResult.includes(num)).length
    // combine 3
    if (k === 3) {
      if (index - 1 !== i) {
        const offsetNumber: number = index - i
        const combine: CombineType = {
          kCombine: 3,
          numberResult: nextElement.numberResult,
          offsetNumber,
        }
        element.feature_3_combine_3.push(combine)
        const elCount = feature_3_combine_count.find(
          (count: CombineCountType) => count.offsetNumber === offsetNumber,
        )
        if (elCount) {
          elCount.total++
        } else {
          const newElCount: CombineCountType = {
            offsetNumber,
            total: 1,
          }
          feature_3_combine_count.push(newElCount)
        }
      }
    }
    // combine 4
    if (k === 4) {
      if (index - 1 !== i) {
        const offsetNumber: number = index - i
        const combine: CombineType = {
          kCombine: 4,
          numberResult: nextElement.numberResult,
          offsetNumber,
        }
        element.feature_3_combine_4.push(combine)
      }
    }
    // combine 5
    if (k === 5) {
      if (index - 1 !== i) {
        const offsetNumber: number = index - i
        const combine: CombineType = {
          kCombine: 5,
          numberResult: nextElement.numberResult,
          offsetNumber,
        }
        element.feature_3_combine_5.push(combine)
      }
    }
    // combine 6
    if (k === 6) {
      if (index - 1 !== i) {
        const offsetNumber: number = index - i
        const combine: CombineType = {
          kCombine: 6,
          numberResult: nextElement.numberResult,
          offsetNumber,
        }
        element.feature_3_combine_6.push(combine)
      }
    }
  }
}
//// end function feature_3

/**
 * feature_4
 */
function feature_4(
  listData: Array<LoteObject>,
  element: LoteObject,
  element2: LoteObject | undefined,
  i: number,
) {
  const max = i + 55
  for (let index = i; index < max; index++) {
    const nextElement = listData[index]
    if (nextElement) {
      element.feature_4_rowElement.push(nextElement.numberResult)
    }
  }
  if (i <= 1000) {
    element.feature_4_consecutiveGrpup = findAllConsecutiveValueGroups(element.feature_4_rowElement)
  }
}
///// end function feature_4

function fromIndex(listData: Array<LoteObject>, offset: number = 0) {
  const oppositeListData = listData[0].loteType === 45 ? listData55 : listData45
  for (let i = 0; i < listData.length; i++) {
    const element = listData[i]
    const element2 = oppositeListData?.[i + offset]

    feature_1(listData, element, element2, i)

    feature_2(listData, element, element2, i)

    feature_3(listData, element, element2, i)

    feature_4(listData, element, element2, i)
  }
}

function matchClassColor(total: number) {
  return total >= 3 ? `match-${total}` : ''
}

function matchRainbow(index: number) {
  const number: number = index + 1
  return `color-${number}`
}

type ResultType = {
  total: number
  offsets: string
}

function groupAndJoinOffsets(list: CombineCountType[]): ResultType[] {
  const grouped: Record<number, number[]> = {}

  for (const item of list) {
    if (!grouped[item.total]) {
      grouped[item.total] = []
    }
    grouped[item.total].push(item.offsetNumber)
  }

  return Object.entries(grouped).map(([total, offsets]) => ({
    total: Number(total),
    offsets: offsets.join(','),
  }))
}

function isConsecutiveGrpup(
  element: LoteObject,
  indexRow: number,
  indexNumber: number,
  number: string,
): boolean {
  return element.feature_4_consecutiveGrpup.some((cg: ConsecutiveGroup) => {
    return cg.index === indexNumber && cg.rows.includes(indexRow) && cg.value === number
  })
}
</script>

<template>
  <div class="content">
    <div>
      <select v-model="totalSelected">
        <option v-for="value in totalOptions" :key="value" :value="value">
          {{ value }}
        </option>
      </select>
    </div>
    <div>Feature_1<input v-model="feature_1_model" type="checkbox" /></div>
    <div>Feature_2<input v-model="feature_2_model" type="checkbox" /></div>
    <div>feature_3<input v-model="feature_3_model" type="checkbox" /></div>
    <div>feature_4<input v-model="feature_4_model" type="checkbox" /></div>
  </div>
  <div class="content"></div>
  <template v-if="feature_1_model || feature_2_model || feature_3_model || feature_4_model">
    <div :style="{ color: 'greenyellow' }">Mô Tả:</div>
    <div v-if="feature_1_model" :style="{ color: 'greenyellow', fontSize: '12px' }">
      Từ kết quả gần nhất của 55 và 45 ta được 12 kết quả tương đương 72 số. đưa các số về thành 1
      tập Set.<br />
      - đếm số lần xuất hiện các số - sort theo(asc) số lần xuất hiện
    </div>
    <div v-if="feature_2_model" :style="{ color: 'greenyellow', fontSize: '12px' }">
      Tìm các kết quả giống với next kết quả và khi nào tìm được thấy 6 kết quả thì dừng.
    </div>
    <div v-if="feature_3_model" :style="{ color: 'greenyellow', fontSize: '12px' }">
      Mỗi kết quả ta lắp qua kết quả trước đó. nếu có từ 3 số trùng nhau trở lên thì ta ghi nhận
      index.
    </div>
    <div v-if="feature_4_model" :style="{ color: 'greenyellow', fontSize: '12px' }">
      Tìm các kết quả giống với next kết quả và tôi thiểu và tối đa 55 kết quả gần nhất.
    </div>
  </template>
  <div class="content">
    <!-- Data 55 -->
    <div>
      <div
        v-for="(item, index) in listData55Render?.slice(0, totalSelected)"
        :key="`listData-${index}`"
      >
        <div class="number">{{ item.weekOfDate }}::{{ index }}::{{ item.numberResult }}</div>
        <!-- feature 1 -->
        <template v-if="feature_1_model">
          <div class="feature_1">Feature_1:</div>
          <div>
            Two list:
            <span
              :class="
                matchClassColor(
                  item.nextItem?.numberResult.filter((num) => item.feature_1_two_list.has(num))
                    .length || 0,
                )
              "
            >
              Result-{{
                item.nextItem?.numberResult.filter((num) => item.feature_1_two_list.has(num))
                  .length || 0
              }}
            </span>
            Size-{{ item.feature_1_two_list.size }}
          </div>
          <div>
            Two list NOT union:
            <span
              :class="
                matchClassColor(
                  item.nextItem?.numberResult.filter((num) => item.feature_1_two_not_union.has(num))
                    .length || 0,
                )
              "
            >
              Result-{{
                item.nextItem?.numberResult.filter((num) => item.feature_1_two_not_union.has(num))
                  .length || 0
              }}
            </span>
            Size-{{ item.feature_1_two_not_union.size }}
          </div>
          <div>
            Union List:
            <span
              :class="
                matchClassColor(
                  item.nextItem?.numberResult.filter((num) =>
                    item.feature_1_union_two_list.has(num),
                  ).length || 0,
                )
              "
            >
              Result-{{
                item.nextItem?.numberResult.filter((num) => item.feature_1_union_two_list.has(num))
                  .length || 0
              }}
            </span>
            Size-{{ item.feature_1_union_two_list.size }}
          </div>
          <div>
            Array 1:
            <span
              :class="
                matchClassColor(
                  item.nextItem?.numberResult.filter((num) => item.feature_1_setArrray_1.has(num))
                    .length || 0,
                )
              "
            >
              Result-{{
                item.nextItem?.numberResult.filter((num) => item.feature_1_setArrray_1.has(num))
                  .length || 0
              }}
            </span>
            Size-{{ item.feature_1_setArrray_1.size }}
          </div>
          <div>
            Array 1 # Array 2:
            <span
              :class="
                matchClassColor(
                  item.nextItem?.numberResult.filter((num) =>
                    item.feature_1_setArrray_1_diff_setArrray_2.has(num),
                  ).length || 0,
                )
              "
            >
              Result-{{
                item.nextItem?.numberResult.filter((num) =>
                  item.feature_1_setArrray_1_diff_setArrray_2.has(num),
                ).length || 0
              }}
            </span>
            Size-{{ item.feature_1_setArrray_1_diff_setArrray_2.size }}
          </div>
          <div>
            Array 2:
            <span
              :class="
                matchClassColor(
                  item.nextItem?.numberResult.filter((num) => item.feature_1_setArrray_2.has(num))
                    .length || 0,
                )
              "
            >
              Result-{{
                item.nextItem?.numberResult.filter((num) => item.feature_1_setArrray_2.has(num))
                  .length || 0
              }}
            </span>
            Size-{{ item.feature_1_setArrray_2.size }}
          </div>
          <div>
            Array 2 # Array 1:
            <span
              :class="
                matchClassColor(
                  item.nextItem?.numberResult.filter((num) =>
                    item.feature_1_setArrray_2_diff_setArrray_1.has(num),
                  ).length || 0,
                )
              "
            >
              Result-{{
                item.nextItem?.numberResult.filter((num) =>
                  item.feature_1_setArrray_2_diff_setArrray_1.has(num),
                ).length || 0
              }}
            </span>
            Size-{{ item.feature_1_setArrray_2_diff_setArrray_1.size }}
          </div>
          <div>Two List Apear<span :style="{ color: 'yellowgreen' }">(default)</span></div>
          <div :style="{ maxWidth: '270px' }">
            <span
              v-for="(numberTotal, indexNumberTotal) in _.orderBy(
                item.feature_1_two_list_number_apear,
                ['total'],
                ['asc'],
              )"
              :key="`row-element${index}${indexNumberTotal}`"
            >
              <span
                :style="{
                  color: numberTotal.isResult ? 'red' : numberTotal.isResult2 ? 'green' : '',
                }"
                >{{ numberTotal.number }}:{{ numberTotal.total }}</span
              ><span v-if="indexNumberTotal < item.feature_1_two_list_number_apear.length - 1">
                -
              </span>
            </span>
          </div>
          <div>Two List Apear <span :style="{ color: 'yellowgreen' }">(asc)</span></div>
          <div :style="{ maxWidth: '270px' }">
            <span
              v-for="(numberTotal, indexNumberTotal) in _.orderBy(
                item.feature_1_two_list_number_apear,
                ['number'],
                ['asc'],
              )"
              :key="`row-element${index}${indexNumberTotal}`"
            >
              <span :style="{ color: numberTotal.isResult ? 'red' : '' }"
                >{{ numberTotal.number }}:{{ numberTotal.total }}</span
              ><span v-if="indexNumberTotal < item.feature_1_two_list_number_apear.length - 1">
                -
              </span>
            </span>
          </div>
          <div>Row Element</div>
          <div
            v-for="(rowElementItem, indexRowElement) in item.feature_1_rowElement"
            :key="`row-element${index}${indexRowElement}`"
          >
            <span
              v-for="(num, numIndex) in rowElementItem"
              :key="`${indexRowElement}${numIndex}`"
              :style="{
                color: item.nextItem?.numberResult.includes(num) ? 'red' : '',
                marginLeft: numIndex > 0 ? '6px' : '',
              }"
              >{{ num }}</span
            >
          </div>
        </template>
        <!-- feature_1 end -->
        <!-- feature 2 -->
        <template v-if="feature_2_model">
          <div class="feature_2">Feature_2:</div>
          <div class="content">
            <div>
              Row Element
              <div
                v-for="(rowElementItem, indexRowElement) in item.feature_2_rowElement"
                :key="`row-element${index}${indexRowElement}`"
              >
                <div :style="{ display: 'inline-block', width: '28px' }">
                  <span class="index">{{ indexRowElement }}:</span>
                </div>
                <span
                  v-for="(num, numIndex) in rowElementItem"
                  :key="`${indexRowElement}${numIndex}`"
                  :style="{
                    marginLeft: numIndex > 0 ? '6px' : '',
                  }"
                  :class="[
                    item.nextItem ? matchRainbow(item.nextItem.numberResult.indexOf(num)) : -1,
                  ]"
                  >{{ num }}</span
                >
              </div>
            </div>
            <div>
              Same 3
              <div
                v-for="(rowElementItem, indexRowElement) in item.feature_2_same3Element"
                :key="`row-element${index}${indexRowElement}`"
              >
                <div :style="{ display: 'inline-block', width: '28px' }">
                  <span class="index">{{ indexRowElement }}:</span>
                </div>
                <span
                  v-for="(num, numIndex) in rowElementItem"
                  :key="`${indexRowElement}${numIndex}`"
                  :style="{
                    marginLeft: numIndex > 0 ? '6px' : '',
                  }"
                  :class="[
                    item.nextItem ? matchRainbow(item.nextItem.numberResult.indexOf(num)) : -1,
                  ]"
                  >{{ num }}</span
                >
              </div>
            </div>
          </div>
        </template>
        <!-- feature 2 end  -->
        <!-- feature 3 -->
        <template v-if="feature_3_model">
          <div class="feature_3">Feature_3:</div>
          <div
            v-for="(row, rowIdx) in _.orderBy(
              groupAndJoinOffsets(feature_3_combine_count_55),
              ['total'],
              ['desc'],
            )"
            :key="`${rowIdx}`"
            :style="{ width: '300px' }"
          >
            <div :style="{ 'max-width': '300px', 'word-break': 'break-all' }">
              <span class="index">{{ row.total }}:</span> {{ row.offsets }}
            </div>
          </div>
          <div>Combine 3</div>
          <div v-for="(row, rowIdx) in item.feature_3_combine_3" :key="`${rowIdx}`">
            <span class="index">{{ row.offsetNumber }}</span
            >{{ row.numberResult }}
          </div>
          <div>Combine 4</div>
          <div v-for="(row, rowIdx) in item.feature_3_combine_4" :key="`${rowIdx}`">
            <span class="index">{{ row.offsetNumber }}</span
            >{{ row.numberResult }}
          </div>
          <div>Combine 5</div>
          <div v-for="(row, rowIdx) in item.feature_3_combine_5" :key="`${rowIdx}`">
            <span class="index">{{ row.offsetNumber }}</span
            >{{ row.numberResult }}
          </div>
          <div>Combine 6</div>
          <div v-for="(row, rowIdx) in item.feature_3_combine_6" :key="`${rowIdx}`">
            <span class="index">{{ row.offsetNumber }}</span
            >{{ row.numberResult }}
          </div>
        </template>
        <!-- feature 3 end -->
        <!-- feature 4 -->
        <template v-if="feature_4_model">
          <div class="feature_4">Feature_4:</div>
          <div v-for="(rowElementItem, idxRow) in item.feature_4_rowElement" :key="`${idxRow}`">
            <div class="index index-row-width">{{ idxRow }}:</div>
            <span
              v-for="(num, numIndex) in rowElementItem"
              :key="`${idxRow}${numIndex}`"
              :style="{
                marginLeft: numIndex > 0 ? '6px' : '',
              }"
              :class="[
                item.nextItem ? matchRainbow(item.nextItem.numberResult.indexOf(num)) : -1,
                isConsecutiveGrpup(item, idxRow, numIndex, num) && 'border-number',
              ]"
              >{{ num }}</span
            >
          </div>
        </template>
        <!-- feature 4 end -->
      </div>
    </div>
    <!-- end -->
    <!-- Data 45 -->
    <div>
      <div
        v-for="(item, index) in listData45Render?.slice(0, totalSelected)"
        :key="`listData-${index}`"
      >
        <div class="number">{{ item.weekOfDate }}::{{ index }}::{{ item.numberResult }}</div>
        <!-- feature 1 -->
        <template v-if="feature_1_model">
          <div class="feature_1">Feature_1:</div>
          <div>
            Two list:
            <span
              :class="
                matchClassColor(
                  item.nextItem?.numberResult.filter((num) => item.feature_1_two_list.has(num))
                    .length || 0,
                )
              "
            >
              Result-{{
                item.nextItem?.numberResult.filter((num) => item.feature_1_two_list.has(num))
                  .length || 0
              }}
            </span>
            Size-{{ item.feature_1_two_list.size }}
          </div>
          <div>
            Two list NOT union:
            <span
              :class="
                matchClassColor(
                  item.nextItem?.numberResult.filter((num) => item.feature_1_two_not_union.has(num))
                    .length || 0,
                )
              "
            >
              Result-{{
                item.nextItem?.numberResult.filter((num) => item.feature_1_two_not_union.has(num))
                  .length || 0
              }}
            </span>
            Size-{{ item.feature_1_two_not_union.size }}
          </div>
          <div>
            Union List:
            <span
              :class="
                matchClassColor(
                  item.nextItem?.numberResult.filter((num) =>
                    item.feature_1_union_two_list.has(num),
                  ).length || 0,
                )
              "
            >
              Result-{{
                item.nextItem?.numberResult.filter((num) => item.feature_1_union_two_list.has(num))
                  .length || 0
              }}
            </span>
            Size-{{ item.feature_1_union_two_list.size }}
          </div>
          <div>Two List Apear<span :style="{ color: 'yellowgreen' }">(default)</span></div>
          <div :style="{ maxWidth: '270px' }">
            <span
              v-for="(numberTotal, indexNumberTotal) in _.orderBy(
                item.feature_1_two_list_number_apear,
                ['total'],
                ['asc'],
              )"
              :key="`row-element${index}${indexNumberTotal}`"
            >
              <span :style="{ color: numberTotal.isResult ? 'red' : '' }"
                >{{ numberTotal.number }}:{{ numberTotal.total }}</span
              ><span v-if="indexNumberTotal < item.feature_1_two_list_number_apear.length - 1">
                -
              </span>
            </span>
          </div>
          <div>Two List Apear <span :style="{ color: 'yellowgreen' }">(asc)</span></div>
          <div :style="{ maxWidth: '270px' }">
            <span
              v-for="(numberTotal, indexNumberTotal) in _.orderBy(
                item.feature_1_two_list_number_apear,
                ['number'],
                ['asc'],
              )"
              :key="`row-element${index}${indexNumberTotal}`"
            >
              <span :style="{ color: numberTotal.isResult ? 'red' : '' }"
                >{{ numberTotal.number }}:{{ numberTotal.total }}</span
              ><span v-if="indexNumberTotal < item.feature_1_two_list_number_apear.length - 1">
                -
              </span>
            </span>
          </div>
          <div>Row Element</div>
          <div
            v-for="(rowElementItem, indexRowElement) in item.feature_1_rowElement"
            :key="`row-element${index}${indexRowElement}`"
          >
            <span
              v-for="(num, numIndex) in rowElementItem"
              :key="`${indexRowElement}${numIndex}`"
              :style="{
                color: item.nextItem?.numberResult.includes(num) ? 'red' : '',
                marginLeft: numIndex > 0 ? '6px' : '',
              }"
              >{{ num }}</span
            >
          </div>
        </template>
        <!-- feature 1 end  -->
        <!-- feature 2 -->
        <template v-if="feature_2_model">
          <div class="feature_2">Feature_2:</div>
          <div class="content">
            <div>
              Row Element
              <div
                v-for="(rowElementItem, indexRowElement) in item.feature_2_rowElement"
                :key="`row-element${index}${indexRowElement}`"
              >
                <div :style="{ display: 'inline-block', width: '28px' }">
                  <span class="index">{{ indexRowElement }}:</span>
                </div>
                <span
                  v-for="(num, numIndex) in rowElementItem"
                  :key="`${indexRowElement}${numIndex}`"
                  :style="{
                    marginLeft: numIndex > 0 ? '6px' : '',
                  }"
                  :class="[
                    item.nextItem ? matchRainbow(item.nextItem.numberResult.indexOf(num)) : -1,
                  ]"
                  >{{ num }}</span
                >
              </div>
            </div>
            <div>
              Same 3
              <div
                v-for="(rowElementItem, indexRowElement) in item.feature_2_same3Element"
                :key="`row-element${index}${indexRowElement}`"
              >
                <div :style="{ display: 'inline-block', width: '28px' }">
                  <span class="index">{{ indexRowElement }}:</span>
                </div>
                <span
                  v-for="(num, numIndex) in rowElementItem"
                  :key="`${indexRowElement}${numIndex}`"
                  :style="{
                    marginLeft: numIndex > 0 ? '6px' : '',
                  }"
                  :class="[
                    item.nextItem ? matchRainbow(item.nextItem.numberResult.indexOf(num)) : -1,
                  ]"
                  >{{ num }}</span
                >
              </div>
            </div>
          </div>
        </template>
        <!-- feature 2 end  -->
        <!-- feature 3 -->
        <template v-if="feature_3_model">
          <div class="feature_3">Feature_3:</div>
          <div
            v-for="(row, rowIdx) in _.orderBy(
              groupAndJoinOffsets(feature_3_combine_count_45),
              ['total'],
              ['desc'],
            )"
            :key="`${rowIdx}`"
          >
            <div :style="{ 'max-width': '300px', 'word-break': 'break-all' }">
              <span class="index">{{ row.total }}:</span> {{ row.offsets }}
            </div>
          </div>
          <div>Combine 3</div>
          <div v-for="(row, rowIdx) in item.feature_3_combine_3" :key="`${rowIdx}`">
            <span class="index">{{ row.offsetNumber }}</span
            >{{ row.numberResult }}
          </div>
          <div>Combine 4</div>
          <div v-for="(row, rowIdx) in item.feature_3_combine_4" :key="`${rowIdx}`">
            <span class="index">{{ row.offsetNumber }}</span
            >{{ row.numberResult }}
          </div>
          <div>Combine 5</div>
          <div v-for="(row, rowIdx) in item.feature_3_combine_5" :key="`${rowIdx}`">
            <span class="index">{{ row.offsetNumber }}</span
            >{{ row.numberResult }}
          </div>
          <div>Combine 6</div>
          <div v-for="(row, rowIdx) in item.feature_3_combine_6" :key="`${rowIdx}`">
            <span class="index">{{ row.offsetNumber }}</span
            >{{ row.numberResult }}
          </div>
        </template>
        <!-- feature 3 end -->
        <!-- feature 4 -->
        <template v-if="feature_4_model">
          <div class="feature_4">Feature_4:</div>
          <div v-for="(rowElementItem, idxRow) in item.feature_4_rowElement" :key="`${idxRow}`">
            <div class="index index-row-width">{{ idxRow }}:</div>
            <span
              v-for="(num, numIndex) in rowElementItem"
              :key="`${idxRow}${numIndex}`"
              :style="{
                marginLeft: numIndex > 0 ? '6px' : '',
              }"
              :class="[
                item.nextItem ? matchRainbow(item.nextItem.numberResult.indexOf(num)) : -1,
                isConsecutiveGrpup(item, idxRow, numIndex, num) && 'border-number',
              ]"
              >{{ num }}</span
            >
          </div>
        </template>
        <!-- feature 4 end -->
      </div>
    </div>
    <!-- end -->
  </div>
</template>
<style lang="css">
body {
  background-color: black;
  color: wheat;
}

.content {
  display: flex;
  gap: 12px;
}

.number {
  color: coral;
}

.index-row-width {
  width: 24px;
  display: inline-block;
}
.border-number {
  border: 1px solid red;
  border-radius: 50px;
}

.index {
  color: aquamarine;
}

.feature_1 {
  color: greenyellow;
}
.feature_2 {
  color: cyan;
}
.feature_3 {
  color: chartreuse;
}

.feature_4 {
  color: brown;
}

.match-6 {
  color: rebeccapurple;
}
.match-5 {
  color: aqua;
}
.match-4 {
  color: greenyellow;
}
.match-3 {
  color: cadetblue;
}

.color-1 {
  color: red;
}
.color-2 {
  color: orange;
}
.color-3 {
  color: yellow;
}
.color-4 {
  color: green;
}
.color-5 {
  color: blue;
}
.color-6 {
  color: indigo;
}
.color-7 {
  color: violet;
}
</style>
