<script setup lang="ts">
import { getLote45, getLote55 } from '@/composables/lote.ts'
import { LoteObject, type ApearType } from '@/types/lote'
import { generateOptions } from '@/utils'
import _ from 'lodash'
import { ref } from 'vue'
// DATA
const listData45: Array<LoteObject> = getLote45()
const listData55: Array<LoteObject> = getLote55()
const maxLength = listData45.length
const totalOptions = ref<number[]>([])
const totalSelected = ref<number>(2)
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
const feature_1_filter = ref<string>('')
const feature_1_filter_two_list = ref<string>('')
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
            isResult2: element.nextItem?.extraNumber === num2,
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
  // next item
  if (element.nextItem) {
    const twoList = [...element.feature_1_two_list.values()]
    // feature_1_two_list_indexs
    element.feature_1_two_list_indexs = element.nextItem?.numberResult.map((num: string) => {
      return twoList.findIndex((num2: string) => num2 === num)
    })
    // feature_1_two_list_missing_next_number
    element.feature_1_two_list_missing_next_number = element.nextItem?.numberResult.filter(
      (num: string) => !twoList.includes(num),
    )
  }
}

function feature_1_filterTwoList() {
  const size = Number(feature_1_filter_two_list.value)
  listData55Render.value = listData55.filter((item: LoteObject) => {
    return item.feature_1_two_list.size === size
  })
  const twoListIdx55 = listData55Render.value.map((item: LoteObject) => {
    return item.feature_1_two_list_indexs
  })
  console.log(twoListIdx55)

  listData45Render.value = listData45.filter((item: LoteObject) => {
    return item.feature_1_two_list.size === size
  })

  const twoListIdx45 = listData45Render.value.map((item: LoteObject) => {
    return item.feature_1_two_list_indexs
  })
  console.log(twoListIdx45)
}
//// end funtion feature_1

function fromIndex(listData: Array<LoteObject>, offset: number = 0) {
  const oppositeListData = listData[0].loteType === 45 ? listData55 : listData45
  // prepare data
  for (let i = 0; i < listData.length; i++) {
    const element = listData[i]
    const element2 = oppositeListData?.[i + offset]

    feature_1(listData, element, element2, i)
  }
}

function matchClassColor(total: number) {
  return total >= 3 ? `match-${total}` : ''
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
  </div>
  <div class="content"></div>
  <template v-if="feature_1_model || feature_2_model || feature_3_model || feature_4_model">
    <div :style="{ color: 'greenyellow' }">Mô Tả:</div>
    <!-- feature 1 -->
    <template v-if="feature_1_model">
      <div :style="{ color: 'greenyellow', fontSize: '12px' }">
        Từ kết quả gần nhất của 55 và 45 ta được 12 kết quả tương đương 72 số. đưa các số về thành 1
        tập Set.<br />
        - đếm số lần xuất hiện các số - sort theo(asc) số lần xuất hiện
      </div>
      <div>
        <select v-model="feature_1_filter">
          <option value="two-list">two list</option>
        </select>
        <template v-if="feature_1_filter === 'two-list'">
          <input v-model="feature_1_filter_two_list" />
          <button @click="feature_1_filterTwoList">Filter Now</button>
        </template>
      </div>
    </template>
  </template>
  <div class="content">
    <!-- Data 55 -->
    <div>
      <div>Total: {{ listData55Render?.length }}</div>
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
          <div>Missing Next Number: {{ item.feature_1_two_list_missing_next_number }}</div>
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
      </div>
    </div>
    <!-- end -->
    <!-- Data 45 -->
    <div>
      <div>Total: {{ listData45Render?.length }}</div>
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
          <div>Missing Next Number: {{ item.feature_1_two_list_missing_next_number }}</div>
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
        <!-- feature 1 end -->
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
