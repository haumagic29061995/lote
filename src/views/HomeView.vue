<script setup lang="ts">
import { getLote45, getLote55 } from '@/composables/lote.ts'
import { LoteObject, type ApearType } from '@/types/lote'
import { generateOptions } from '@/utils'
import _ from 'lodash'
import { ref } from 'vue'
import moment from 'moment'

type DropdownType = {
  text: string
  value: number
}
// DATA
const listData45: Array<LoteObject> = getLote45()
const listData55: Array<LoteObject> = getLote55()
const maxLength = listData45.length
const totalOptions = ref<number[]>([])
const totalSelected = ref<number>(5)
totalOptions.value = generateOptions(maxLength)

const momentDate1 = moment(listData45[0].date, 'DD/MM/YYYY')
const momentDate2 = moment(listData55[0].date, 'DD/MM/YYYY')
const predictionLoteType: number = momentDate1 > momentDate2 ? 55 : 45

const offsetLoteType55: number = predictionLoteType === 55 ? 0 : -1
const offsetLoteType45: number = predictionLoteType === 45 ? 0 : -1
const feature_1_filter_two_list_set = new Set<number>()

mainFeature(listData45, offsetLoteType45)
mainFeature(listData55, offsetLoteType55)

const listData45Render = ref<Array<LoteObject>>()
listData45Render.value = listData45

const listData55Render = ref<Array<LoteObject>>()
listData55Render.value = listData55

const feature_1_model = ref<boolean>(false)
const feature_1_filter = ref<string>('')
const feature_1_filter_two_list = ref<Array<DropdownType>>([])

feature_1_filter_two_list.value = [...feature_1_filter_two_list_set.values()]
  .sort()
  .map((value) => {
    const result: DropdownType = {
      text: `${value}`,
      value,
    }
    return result
  })

console.log(listData45)
console.log(listData55)

///// function Feature 1
function feature_1(
  listData: Array<LoteObject>,
  element: LoteObject,
  element2: LoteObject | undefined,
  i: number,
) {
  const filterList: string[] = element.numberResult.filter((num) =>
    element2?.numberResult.includes(num),
  )

  // element
  element.feature_1_duplicate_number = filterList
  element.numberResult.forEach((num: string) => {
    const idx: number = Number(num) + i
    const elementItem: LoteObject = listData[idx]
    if (elementItem) {
      element.feature_1_rowElement.push(elementItem.numberResult)
      elementItem.numberResult.forEach((num2: string) => {
        element.feature_1_two_list.add(num2)
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
    element2.numberResult
      .filter((num0) => !filterList.includes(num0))
      .forEach((num: string) => {
        const idx: number = Number(num) + i
        const elementItem: LoteObject = listData[idx]
        if (elementItem) {
          element.feature_1_rowElement.push(elementItem.numberResult)
          elementItem.numberResult.forEach((num2: string) => {
            element.feature_1_two_list.add(num2)
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

  const sortTwoList = _.orderBy(element.feature_1_two_list_number_apear, ['total'], ['asc'])
  element.feature_1_two_list_apear_sorted = sortTwoList

  if (element.nextItem) {
    const indexSorted: number[] = []

    element.nextItem?.numberResult.forEach((num) => {
      const index = sortTwoList.findIndex((item) => item.number === num)
      const patternIndex = index % 6
      if (index !== -1) {
        indexSorted.push(index)
        element.feature_1_two_list_apear_sorted_pattern[patternIndex]++
      }
    })
    element.feature_1_two_list_apear_sorted_index = indexSorted
  }
}

let resultMap = 0
function feature_1_resultMap(event: Event) {
  const target = event.target as HTMLSelectElement
  const size = Number(target.value)
  resultMap = size
  feature_1_filterTwoList_handle()
}

const twoListColumn = ref(6)
function feature_1_columnTwoList(event: Event) {
  const target = event.target as HTMLSelectElement
  const column = Number(target.value)
  twoListColumn.value = column
}

let filterTwoListSize = -1
function feature_1_filterTwoList(event: Event) {
  const target = event.target as HTMLSelectElement
  const size = Number(target.value)
  filterTwoListSize = size
  feature_1_filterTwoList_handle()
}

let filterDuplicateTwoListSize = -1
function feature_1_filterDuplicateTwoList(event: Event) {
  const target = event.target as HTMLSelectElement
  const size = Number(target.value)
  filterDuplicateTwoListSize = size
  feature_1_filterTwoList_handle()
}

function feature_1_filterTwoList_handle() {
  let listData55Filter = listData55
  let listData45Filter = listData45
  if (filterTwoListSize !== -1) {
    listData55Filter = listData55Filter.filter((item: LoteObject) => {
      return item.feature_1_two_list.size === filterTwoListSize
    })
    listData45Filter = listData45Filter.filter((item: LoteObject) => {
      return item.feature_1_two_list.size === filterTwoListSize
    })
  }
  if (filterDuplicateTwoListSize !== -1) {
    listData55Filter = listData55Filter.filter((item: LoteObject) => {
      return item.feature_1_duplicate_number.length === filterDuplicateTwoListSize
    })
    listData45Filter = listData45Filter.filter((item: LoteObject) => {
      return item.feature_1_duplicate_number.length === filterDuplicateTwoListSize
    })
  }
  if (resultMap !== 0) {
    listData55Filter = listData55Filter.filter((item: LoteObject) => {
      return (
        !item.nextItem?.numberResult ||
        item.nextItem?.numberResult.filter((num) => item.feature_1_two_list.has(num)).length ===
          resultMap
      )
    })
    listData45Filter = listData45Filter.filter((item: LoteObject) => {
      return (
        !item.nextItem?.numberResult ||
        item.nextItem?.numberResult.filter((num) => item.feature_1_two_list.has(num)).length ===
          resultMap
      )
    })
  }
  listData55Render.value = listData55Filter
  listData45Render.value = listData45Filter
}

//// end funtion feature_1

function mainFeature(listData: Array<LoteObject>, offset: number = 0) {
  const oppositeListData = listData[0].loteType === 45 ? listData55 : listData45
  // prepare data
  for (let i = 0; i < listData.length; i++) {
    const element = listData[i]
    const element2 = oppositeListData?.[i + offset]

    feature_1(listData, element, element2, i)
    // feature_1_filter_two_list
    const total = element.feature_1_two_list.size || 0
    if (total >= 30 && total <= 55) {
      feature_1_filter_two_list_set.add(total)
    }
  }
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
  <template v-if="feature_1_model">
    <div :style="{ color: 'greenyellow' }">Mô Tả:</div>
    <!-- feature 1 -->
    <template v-if="feature_1_model">
      <div :style="{ color: 'greenyellow', fontSize: '12px' }">
        Từ kết quả gần nhất của 55 và 45 ta được 12 kết quả tương đương 72 số. đưa các số về thành 1
        tập Set.<br />
        - đếm số lần xuất hiện các số - sort theo(asc) số lần xuất hiện
      </div>
      <div>
        Column:
        <select @change="feature_1_columnTwoList" :style="{ width: '60px', height: '24px' }">
          <option value="6">6 col</option>
          <option value="5">5 col</option>
          <option value="4">4 col</option>
          <option value="3">3 col</option>
          <option value="2">2 col</option>
          <option value="1">1 col</option>
        </select>
        Result:
        <select @change="feature_1_resultMap" :style="{ width: '40px', height: '24px' }">
          <option value="0">0</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
        <select v-model="feature_1_filter" :style="{ width: '80px', height: '24px' }">
          <option value="two-list">two list</option>
        </select>
        <template v-if="feature_1_filter === 'two-list'">
          <select @change="feature_1_filterTwoList" :style="{ width: '50px', height: '24px' }">
            <option
              v-for="(option, index) in feature_1_filter_two_list"
              :value="option.value"
              :key="index"
            >
              {{ option.text }}
            </option>
          </select>
          <select
            @change="feature_1_filterDuplicateTwoList"
            :style="{ width: '60px', height: '24px' }"
          >
            <option value="-1">clear</option>
            <option value="0">-0-</option>
            <option value="1">-1-</option>
            <option value="2">-2-</option>
            <option value="3">-3-</option>
          </select>
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
        <div class="number d-flex">
          <div :style="{ width: '200px' }">
            {{ item.date }}::{{ item.weekOfDate }}::{{ index }}::
          </div>
          <div>{{ item.numberResult }}</div>
        </div>
        <!-- feature 1 -->
        <template v-if="feature_1_model">
          <div class="feature_1">Feature_1:</div>
          <div>
            Two list:
            <span>
              Result-{{
                item.nextItem?.numberResult.filter((num) => item.feature_1_two_list.has(num))
                  .length || 0
              }}
            </span>
            Size-{{ item.feature_1_two_list.size }}
          </div>
          <div>Duplicate Number: {{ item.feature_1_duplicate_number }}</div>
          <div>Two List Apear<span :style="{ color: 'yellowgreen' }">(default)</span></div>
          <div :style="{ maxWidth: 45 * twoListColumn + 'px' }">
            <span
              v-for="(numberTotal, indexNumberTotal) in item.feature_1_two_list_apear_sorted"
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
        <div class="number d-flex">
          <div :style="{ width: '200px' }">
            {{ item.date }}::{{ item.weekOfDate }}::{{ index }}::
          </div>
          <div>{{ item.numberResult }}</div>
        </div>
        <!-- feature 1 -->
        <template v-if="feature_1_model">
          <div class="feature_1">Feature_1:</div>
          <div>
            Two list:
            <span>
              Result-{{
                item.nextItem?.numberResult.filter((num) => item.feature_1_two_list.has(num))
                  .length || 0
              }}
            </span>
            Size-{{ item.feature_1_two_list.size }}
          </div>
          <div>Duplicate Number: {{ item.feature_1_duplicate_number }}</div>
          <div>Two List Apear<span :style="{ color: 'yellowgreen' }">(default)</span></div>
          <div :style="{ maxWidth: 45 * twoListColumn + 'px' }">
            <span
              v-for="(numberTotal, indexNumberTotal) in item.feature_1_two_list_apear_sorted"
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
        </template>
        <!-- feature_1 end -->
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
.feature_1 {
  color: greenyellow;
}
.d-flex {
  display: flex;
  align-items: center;
}
</style>
