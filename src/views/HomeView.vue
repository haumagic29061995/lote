<script setup lang="ts">
import { getLote45, getLote55 } from '@/composables/lote.ts'
import { LoteObject, type ApearRepeat, type ApearType } from '@/types/lote'
import { generateOptions, sortNestedArray } from '@/utils'
import _, { cloneDeep } from 'lodash'
import { ref } from 'vue'
import moment from 'moment'

type DropdownType = {
  text: string
  value: number
}

// DATA
const listData45: Array<LoteObject> = getLote45()
const listData55: Array<LoteObject> = getLote55()
const listIndexList: number[][][] = []
const setRepeat55: ApearRepeat[] = []
for (let i = 1; i <= 55; i++) {
  const number = i.toString().padStart(2, '0')
  const appear: ApearRepeat = {
    number,
    total: 0,
    maxRepeat: 0,
  }
  setRepeat55.push(appear)
}
const maxLength = listData45.length
const totalOptions = ref<number[]>([])
const totalSelected = ref<number>(2)
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
const feature_1_hide_0 = ref<boolean>(false)
const feature_1_filter_week = ref<string>('')

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
console.log(setRepeat55, 'repeat 55')
console.log(listIndexList, 'index.json')

///// Feature 1
// function feature 1
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
  element.feature_1_duplicate_numbers_45_55_at_index0 = filterList
  element.numberResult.forEach((num: string) => {
    const idx: number = Number(num) + i
    const elementItem: LoteObject = listData[idx]
    if (elementItem) {
      element.feature_1_list_result_45_55_at_index0.push(elementItem.numberResult)
      elementItem.numberResult.forEach((num2: string) => {
        element.feature_1_set_numbers_from_result_45_55_at_index0.add(num2)
        const findItem = element.feature_1_appear_list.find((item) => item.number === num2)
        if (findItem) {
          findItem.total++
        } else {
          const numberApear: ApearType = {
            number: num2,
            total: 1,
            isResult: element.nextItem?.numberResult.includes(num2) || false,
            isResult2: element.nextItem?.extraNumber === num2,
            isDuplicate: element.feature_1_duplicate_numbers_45_55_at_index0.includes(num2),
          }
          element.feature_1_appear_list.push(numberApear)
        }
      })
    }
  })
  if (element.loteType === 55) {
    // repeat, số lần tối đa lập lại của mỗi số
    setRepeat55.forEach((item) => {
      if (element.numberResult.includes(item.number)) {
        item.total++
      } else {
        if (!item.maxRepeat || item.maxRepeat < item.total) {
          item.maxRepeat = item.total
        }
        item.total = 0
      }
    })
  }

  // opposite element
  if (element2) {
    element2.numberResult
      .filter((num0) => !filterList.includes(num0))
      .forEach((num: string) => {
        const idx: number = Number(num) + i
        const elementItem: LoteObject = listData[idx]
        if (elementItem) {
          element.feature_1_list_result_45_55_at_index0.push(elementItem.numberResult)
          elementItem.numberResult.forEach((num2: string) => {
            element.feature_1_set_numbers_from_result_45_55_at_index0.add(num2)
            const findItem = element.feature_1_appear_list.find((item) => item.number === num2)
            if (findItem) {
              findItem.total++
            } else {
              const numberApear: ApearType = {
                number: num2,
                total: 1,
                isResult: element.nextItem?.numberResult.includes(num2) || false,
                isResult2: element.nextItem?.extraNumber === num2,
                isDuplicate: element.feature_1_duplicate_numbers_45_55_at_index0.includes(num2),
              }
              element.feature_1_appear_list.push(numberApear)
            }
          })
        }
      })
  }
  const sortTwoList = _.orderBy(element.feature_1_appear_list, ['total'], ['asc'])

  // nearly appear
  for (let n = i; n < listData.length; n++) {
    const nearlyElement = listData[n]
    // count
    element.feature_1_nearly_how_manu_version_from_index0 =
      element.feature_1_nearly_how_manu_version_from_index0
        ? element.feature_1_nearly_how_manu_version_from_index0 + 1
        : 1
    // add number
    nearlyElement.numberResult.forEach((num: string) => {
      if (!element.feature_1_nearly_set_numbers_from_index0.has(num)) {
        element.feature_1_nearly_set_numbers_from_index0.add(num)
      }
    })
    if (element.feature_1_nearly_set_numbers_from_index0.size >= element.loteType) {
      break
    }
  }
  if (element.feature_1_nearly_set_numbers_from_index0.size < element.loteType) {
    element.feature_1_nearly_how_manu_version_from_index0 = undefined
  }

  // no number
  const numberSet = new Set<string>()
  element.feature_1_appear_list.forEach((item) => {
    numberSet.add(item.number)
  })
  const appearO: ApearType[] = []
  element.feature_1_nearly_set_numbers_from_index0.forEach((number: string) => {
    if (numberSet.has(number)) {
      return
    }
    const appear: ApearType = {
      number,
      total: 0,
      isResult: element.nextItem?.numberResult.includes(number) || false,
      isResult2: element.nextItem?.extraNumber === number,
      isDuplicate: element.feature_1_duplicate_numbers_45_55_at_index0.includes(number),
    }
    appearO.push(appear)
  })
  element.feature_1_appear_list_total = [...appearO, ...sortTwoList]

  // nearly and total
  element.feature_1_nearly_set_numbers_from_index0.forEach((number: string) => {
    const findItem = element.feature_1_appear_list_total.find((item) => item.number === number)
    if (findItem) {
      element.feature_1_nearly_appear_list.push(findItem)
    }
  })
  element.feature_1_nearly_appear_list = _.orderBy(
    element.feature_1_nearly_appear_list,
    ['total'],
    ['asc'],
  )

  // find index
  if (element.nextItem) {
    const indexSorted: number[] = []
    const mapNextResult =
      element.nextItem?.numberResult.filter((num) =>
        element.feature_1_appear_list_total.some((item) => item.number === num),
      ).length || 0
    element.nextItem?.numberResult.forEach((num) => {
      const index = element.feature_1_appear_list_total.findIndex((item) => item.number === num)
      const patternIndex = index % 6
      if (index !== -1) {
        indexSorted.push(index)
        if (mapNextResult === 6) {
          element.feature_1_appear_pattern_list_total[patternIndex]++
        }
      }
    })
    element.feature_1_appear_index_list_total = indexSorted
    const sorted = [...indexSorted].sort((a, b) => a - b)
    const distances = sorted.slice(1).map((val, i) => val - sorted[i])
    element.feature_1_appear_spacing_list_index_total = distances
  }
  if (element.nextItem) {
    const indexSorted: number[] = []
    element.nextItem?.numberResult.forEach((num) => {
      const index = element.feature_1_nearly_appear_list.findIndex((item) => item.number === num)
      if (index !== -1) {
        indexSorted.push(index)
      }
    })
    element.feature_1_nearly_index_appear_list = indexSorted
    const sorted = [...indexSorted].sort((a, b) => a - b)
    const distances = sorted.slice(1).map((val, i) => val - sorted[i])
    element.feature_1_nearly_spacing_list_index = distances
  }

  const twoListIndex: number[] = [0, 1, 2, 3, 4, 5]
  if ((twoListIndex.length === 0 || twoListIndex.includes(i)) && element.loteType === 55) {
    const limit = twoListIndex.length === 0 ? 0 : 46
    twoListPrediction(i, element, limit)
  }
}

function twoListPrediction(i: number, element: LoteObject, limit: number = 46) {
  console.log('================= start with i = ', i + ' =================')

  let apearList: ApearType[] = []
  let list55Prototype: ApearType[] = []
  const nextNumbers = element.nextItem?.numberResult || []
  const endList = []
  const idxList: number[][] = []
  // 55
  element.numberResult.forEach((num) => {
    const newIndex = Number(num)
    const el55 = listData55[newIndex + i]
    if (el55) {
      el55.numberResult.forEach((num2) => {
        const findItem = apearList.find((item) => item.number === num2)
        if (findItem) {
          findItem.total++
        } else {
          const numberApear: ApearType = {
            number: num2,
            total: 1,
            isResult: false,
            isResult2: false,
            isDuplicate: false,
          }
          apearList.push(numberApear)
        }
      })
    }
  })
  if (apearList.length === 0) {
    return
  }

  list55Prototype = cloneDeep(apearList)

  // 45
  for (let k = i; k < listData55.length - 1; k++) {
    apearList = cloneDeep(list55Prototype)

    const element45 = listData45[k]
    element45.numberResult.forEach((num) => {
      const newIndex = Number(num)
      /**
       * bắt đầu từ k
       * index là new index
       */
      const el55By45 = listData55[k + newIndex - offsetLoteType55]
      if (el55By45) {
        el55By45.numberResult.forEach((num2) => {
          const findItem = apearList.find((item) => item.number === num2)
          if (findItem) {
            findItem.total++
          } else {
            const numberApear: ApearType = {
              number: num2,
              total: 1,
              isResult: false,
              isResult2: false,
              isDuplicate: false,
            }
            apearList.push(numberApear)
          }
        })
      }
    })

    const sortTwoList = _.orderBy(apearList, ['total'], ['asc'])
    const list = [...sortTwoList.map((item) => item.number)]
    if (list.length >= limit) {
      endList.push(list)
      const indexList: number[] = []
      nextNumbers.forEach((num11) => {
        const idx = list.findIndex((num) => num === num11)
        if (idx != -1) {
          indexList.push(idx)
        }
      })
      const total = list.filter((n) => nextNumbers.includes(n)).length
      if (total === 6) {
        idxList.push(indexList.sort((a, b) => a - b))
      }
      if (limit >= 46) {
        console.log('max tran = ', endList.length)
        console.log(list.length, total)
        console.log('index = ', k - i)
      }
    }
  }
  if (limit >= 46) {
    console.log(nextNumbers, 'next')
    console.log(element.numberResult, 'current')
    console.log(endList, 'list')
    console.log('index list = ', idxList)
    console.log('================')
  }

  listIndexList.push(sortNestedArray(idxList))
}
// end function feature 1

// filter feature 1
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
      return item.feature_1_set_numbers_from_result_45_55_at_index0.size === filterTwoListSize
    })
    listData45Filter = listData45Filter.filter((item: LoteObject) => {
      return item.feature_1_set_numbers_from_result_45_55_at_index0.size === filterTwoListSize
    })
  }
  if (filterDuplicateTwoListSize !== -1) {
    listData55Filter = listData55Filter.filter((item: LoteObject) => {
      return item.feature_1_duplicate_numbers_45_55_at_index0.length === filterDuplicateTwoListSize
    })
    listData45Filter = listData45Filter.filter((item: LoteObject) => {
      return item.feature_1_duplicate_numbers_45_55_at_index0.length === filterDuplicateTwoListSize
    })
  }
  if (resultMap !== 0) {
    listData55Filter = listData55Filter.filter((item: LoteObject) => {
      return (
        !item.nextItem?.numberResult ||
        item.nextItem?.numberResult.filter((num) =>
          item.feature_1_set_numbers_from_result_45_55_at_index0.has(num),
        ).length === resultMap
      )
    })
    listData45Filter = listData45Filter.filter((item: LoteObject) => {
      return (
        !item.nextItem?.numberResult ||
        item.nextItem?.numberResult.filter((num) =>
          item.feature_1_set_numbers_from_result_45_55_at_index0.has(num),
        ).length === resultMap
      )
    })
  }
  if (feature_1_filter_week.value) {
    listData55Filter = listData55Filter.filter(
      (item: LoteObject) => item.weekOfDate === feature_1_filter_week.value,
    )
    listData45Filter = listData45Filter.filter(
      (item: LoteObject) => item.weekOfDate === feature_1_filter_week.value,
    )
  }
  listData55Render.value = listData55Filter
  listData45Render.value = listData45Filter
}
// end filter feature 1

// count 6 in two list
function feature_1_filter_two_list_set_count_6(
  listData: Array<LoteObject>,
  element: LoteObject,
  i: number,
) {
  if (element.nextItem) {
    const countNumber = new Set<string>()
    const listApear = listData.filter((item, index) => {
      if (index > i) {
        return (
          item.feature_1_set_numbers_from_result_45_55_at_index0.size ===
          element.feature_1_set_numbers_from_result_45_55_at_index0.size
        )
      }
    })
    for (let j = 0; j < listApear.length; j++) {
      const item = listApear[j]
      // count
      element.feature_1_spacing_count_6_in_appear = element.feature_1_spacing_count_6_in_appear
        ? element.feature_1_spacing_count_6_in_appear + 1
        : 1
      if (countNumber.size <= 0) {
        element.feature_1_spacing_count_1_in_appear = element.feature_1_spacing_count_1_in_appear
          ? element.feature_1_spacing_count_1_in_appear + 1
          : 1
      }
      // add number
      item.feature_1_appear_index_list_total.forEach((index: number) => {
        const number = element.feature_1_appear_list_total[index].number
        if (element.nextItem?.numberResult.includes(number)) {
          countNumber.add(number)
        }
      })
      if (countNumber.size === 6) {
        element.feature_1_order_6_number_from_next_result = [...countNumber]
        break
      }
    }
    if (countNumber.size <= 0) {
      element.feature_1_spacing_count_1_in_appear = undefined
    }
    if (countNumber.size < 6) {
      element.feature_1_spacing_count_6_in_appear = undefined
    }
  }
}
// end count 6 in two list

//// end feature 1

//// main feature
function mainFeature(listData: Array<LoteObject>, offset: number = 0) {
  const oppositeListData = listData[0].loteType === 45 ? listData55 : listData45
  // prepare data
  for (let i = 0; i < listData.length; i++) {
    const element = listData[i]
    const element2 = oppositeListData?.[i + offset]

    feature_1(listData, element, element2, i)
    // feature_1_filter_two_list
    const total = element.feature_1_set_numbers_from_result_45_55_at_index0.size || 0
    if (total >= 30 && total <= 55) {
      feature_1_filter_two_list_set.add(total)
    }
  }
  for (let i = 0; i < listData.length; i++) {
    const element = listData[i]
    feature_1_filter_two_list_set_count_6(listData, element, i)
  }
}
//// end main feature

/// common
function twoListResult(item: LoteObject) {
  return (
    item.nextItem?.numberResult.filter((num) =>
      item.feature_1_set_numbers_from_result_45_55_at_index0.has(num),
    ).length || 0
  )
}

function twoListResultStyle(item: LoteObject) {
  const result = twoListResult(item)
  if (result === 6) {
    return { color: 'red' }
  } else if (result === 5) {
    return { color: 'orange' }
  } else if (result === 4) {
    return { color: 'yellow' }
  } else {
    return {}
  }
}

function resultNumberStyle(item: ApearType) {
  let style = {}
  if (item.isDuplicate) {
    style = { borderBottom: '1px solid lawngreen', ...style }
  }
  if (item.isResult) {
    style = { color: 'red', ...style }
  } else if (item.isResult2) {
    style = { color: 'fuchsia', ...style }
  }
  return style
}

/// end common
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
        <span>ngày trong tuần:</span>
        <select v-model="feature_1_filter_week" :style="{ width: '60px', height: '24px' }"
          @change="feature_1_filterTwoList_handle">
          <option value=""></option>
          <option value="Tuesday">Tuesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Saturday">Saturday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Friday">Friday</option>
          <option value="Sunday">Sunday</option>
        </select>
        <span>Ẩn Xuất hiện 0 lần:<input v-model="feature_1_hide_0" type="checkbox" /></span>
        Số cột danh sách hiển thị:
        <select v-model="twoListColumn" @change="feature_1_columnTwoList" :style="{ width: '60px', height: '24px' }">
          <option value="10">10 col</option>
          <option value="9">9 col</option>
          <option value="8">8 col</option>
          <option value="7">7 col</option>
          <option value="6">6 col</option>
          <option value="5">5 col</option>
          <option value="4">4 col</option>
          <option value="3">3 col</option>
          <option value="2">2 col</option>
          <option value="1">1 col</option>
        </select>
        Số kết quả:
        <select @change="feature_1_resultMap" :style="{ width: '40px', height: '24px' }">
          <option value="0">0</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
        <select v-model="feature_1_filter" :style="{ width: '100px', height: '24px' }">
          <option value="two-list">2 danh sách</option>
        </select>
        <template v-if="feature_1_filter === 'two-list'">
          <select @change="feature_1_filterTwoList" :style="{ width: '50px', height: '24px' }">
            <option v-for="(option, index) in feature_1_filter_two_list" :value="option.value" :key="index">
              {{ option.text }}
            </option>
          </select>
          <select @change="feature_1_filterDuplicateTwoList" :style="{ width: '60px', height: '24px' }">
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
      <div v-for="(item, index) in listData55Render?.slice(0, totalSelected)" :key="`listData-${index}`">
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
            Sô kết quả:
            <span :style="twoListResultStyle(item)">{{ twoListResult(item) }}</span>
          </div>
          <div>
            Số lượng xuất hiện: {{ item.feature_1_set_numbers_from_result_45_55_at_index0.size }}
          </div>
          <div>
            Kết quả trùng: {{ item.feature_1_duplicate_numbers_45_55_at_index0 }}
            <template v-if="item.nextItem">
              {{
                item.nextItem?.numberResult.filter((num) =>
                  item.feature_1_duplicate_numbers_45_55_at_index0.includes(num),
                )
              }}
            </template>
          </div>
          <div>
            6 số xuất hiện gần nhất cách
            <span :style="{ color: 'red' }">{{
              item.feature_1_nearly_how_manu_version_from_index0
                ? item.feature_1_nearly_how_manu_version_from_index0
                : 'chưa có'
            }}</span>
            kỳ
          </div>
          <div>
            Lọc với
            <span :style="{ color: 'CadetBlue' }">{{
              item.feature_1_set_numbers_from_result_45_55_at_index0.size
            }}</span>
            số đầu tiên xuất hiện gần nhất cách
            <span :style="{ color: 'red' }">{{
              item.feature_1_spacing_count_1_in_appear
                ? item.feature_1_spacing_count_1_in_appear
                : 'chưa có'
            }}</span>
          </div>
          <div>
            Lọc với
            <span :style="{ color: 'CadetBlue' }">{{
              item.feature_1_set_numbers_from_result_45_55_at_index0.size
            }}</span>
            6 số xuất hiện gần nhất cách
            <span :style="{ color: 'red' }">{{
              item.feature_1_spacing_count_6_in_appear
                ? item.feature_1_spacing_count_6_in_appear
                : 'chưa có'
            }}</span>
          </div>
          <div>Danh sách xuất hiện:</div>
          <div :style="{
            maxWidth: 34 * twoListColumn + 'px',
            flexWrap: 'wrap',
          }" class="d-flex value-color">
            <template v-for="(numberTotal, indexNumberTotal) in item.feature_1_appear_list_total">
              <div :key="`row-element${index}${indexNumberTotal}`" :style="{
                width: '34px',
              }" v-if="numberTotal.total !== 0 || (numberTotal.total === 0 && !feature_1_hide_0)">
                <span :style="resultNumberStyle(numberTotal)">{{ numberTotal.number }}:{{ numberTotal.total }}</span>
              </div>
            </template>
          </div>
        </template>
        <!-- feature_1 end -->
      </div>
    </div>
    <!-- end -->
    <!-- Data 45 -->
    <div>
      <div>Total: {{ listData45Render?.length }}</div>
      <div v-for="(item, index) in listData45Render?.slice(0, totalSelected)" :key="`listData-${index}`">
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
            Sô kết quả:
            <span :style="twoListResultStyle(item)">{{ twoListResult(item) }}</span>
          </div>
          <div>
            Số lượng xuất hiện: {{ item.feature_1_set_numbers_from_result_45_55_at_index0.size }}
          </div>
          <div>
            Kết quả trùng: {{ item.feature_1_duplicate_numbers_45_55_at_index0 }}
            <template v-if="item.nextItem">
              {{
                item.nextItem?.numberResult.filter((num) =>
                  item.feature_1_duplicate_numbers_45_55_at_index0.includes(num),
                )
              }}
            </template>
          </div>
          <div>
            6 số xuất hiện gần nhất cách
            <span :style="{ color: 'red' }">{{
              item.feature_1_nearly_how_manu_version_from_index0
                ? item.feature_1_nearly_how_manu_version_from_index0
                : 'chưa có'
            }}</span>
            kỳ
          </div>
          <div>
            Lọc với
            <span :style="{ color: 'CadetBlue' }">{{
              item.feature_1_set_numbers_from_result_45_55_at_index0.size
            }}</span>
            số đầu tiên xuất hiện gần nhất cách
            <span :style="{ color: 'red' }">{{
              item.feature_1_spacing_count_1_in_appear
                ? item.feature_1_spacing_count_1_in_appear
                : 'chưa có'
            }}</span>
          </div>
          <div>
            Lọc với
            <span :style="{ color: 'CadetBlue' }">{{
              item.feature_1_set_numbers_from_result_45_55_at_index0.size
            }}</span>
            6 số xuất hiện gần nhất cách
            <span :style="{ color: 'red' }">{{
              item.feature_1_spacing_count_6_in_appear
                ? item.feature_1_spacing_count_6_in_appear
                : 'chưa có'
            }}</span>
          </div>
          <div>Danh sách xuất hiện:</div>
          <div :style="{
            maxWidth: 34 * twoListColumn + 'px',
            flexWrap: 'wrap',
          }" class="d-flex value-color">
            <template v-for="(numberTotal, indexNumberTotal) in item.feature_1_appear_list_total">
              <div :key="`row-element${index}${indexNumberTotal}`" :style="{
                width: '34px',
              }" v-if="numberTotal.total !== 0 || (numberTotal.total === 0 && !feature_1_hide_0)">
                <span :style="resultNumberStyle(numberTotal)">{{ numberTotal.number }}:{{ numberTotal.total }}</span>
              </div>
            </template>
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

.value-color {
  color: white;
}
</style>
