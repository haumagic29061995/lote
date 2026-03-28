<script setup lang="ts">
import { getLote45, getLote55 } from '@/composables/lote'
import { LoteObject, type ApearRepeat, type ApearType } from '@/types/lote'
import { type DropdownType } from '@/types/common'
import { generateOptions } from '@/utils'
import _ from 'lodash'
import { ref } from 'vue'
import moment from 'moment'

const listData45: Array<LoteObject> = getLote45()
const listData55: Array<LoteObject> = getLote55()

const setRepeat45: ApearRepeat[] = []
const setRepeat55: ApearRepeat[] = []

generateSetRepeat45()
function generateSetRepeat45() {
  for (let i = 1; i <= 45; i++) {
    const number = i.toString().padStart(2, '0')
    const appear: ApearRepeat = {
      number,
      total: 0,
      maxRepeat: 0,
    }
    setRepeat45.push(appear)
  }
}

generateSetRepeat55()
function generateSetRepeat55() {
  for (let i = 1; i <= 55; i++) {
    const number = i.toString().padStart(2, '0')
    const appear: ApearRepeat = {
      number,
      total: 0,
      maxRepeat: 0,
    }
    setRepeat55.push(appear)
  }
}

const maxLength = listData45.length
const totalOptions = ref<number[]>([])
totalOptions.value = generateOptions(maxLength)

const totalSelected = ref<number>(7)

const momentDate1 = moment(listData45[0].date, 'DD/MM/YYYY')
const momentDate2 = moment(listData55[0].date, 'DD/MM/YYYY')
const predictionLoteType: number = momentDate1 > momentDate2 ? 55 : 45
console.log('Dự đoán hôm nay: ', predictionLoteType);

const offsetLoteType55: number = predictionLoteType === 55 ? 0 : -1
const offsetLoteType45: number = predictionLoteType === 45 ? 0 : -1

const setFilterWith2Results = new Set<number>()

const twoListColumn = ref(6)

const isDisplayFeature = ref<boolean>(false)

const hideAppearIs0 = ref<boolean>(false)

const hideNumbersFromDateToIndex = ref<boolean>(false)

const hideDuplicateNumbers = ref<boolean>(false)

const filterWith2Result = ref<string>('')

const filterWithWeek = ref<string>('')

runMainFeature(listData45, offsetLoteType45)
runMainFeature(listData55, offsetLoteType55)

const listData45Render = ref<Array<LoteObject>>()
listData45Render.value = listData45

const listData55Render = ref<Array<LoteObject>>()
listData55Render.value = listData55

const arrayFilterFor2Result = ref<Array<DropdownType>>([])
arrayFilterFor2Result.value = [...setFilterWith2Results.values()]
  .sort()
  .map((value) => {
    const result: DropdownType = {
      text: `${value}`,
      value,
    }
    return result
  })

console.log('data list 45', listData45)
console.log('data list 55', listData55)
console.log('lập lại 45 number', setRepeat45)
console.log('lập lại 55 number', setRepeat55)

function handleSetRepeat45(element: LoteObject) {
  if (element.loteType === 45) {
    setRepeat45.forEach((item) => {
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
}

function handleSetRepeat55(element: LoteObject) {
  if (element.loteType === 55) {
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
}

function handleDisplayFeature(
  listData: Array<LoteObject>,
  element: LoteObject,
  element2: LoteObject | undefined,
  i: number,
) {

  handleSetRepeat45(element)

  handleSetRepeat55(element)

  const filterList: string[] = element.numberResult.filter((num) =>
    element2?.numberResult.includes(num),
  )

  element.duplicateNumbers4555Index0 = filterList
  element.numbersFromResult4555Index0 = duplicateNumbers(element, i)

  element.numberResult.forEach((num: string) => {
    const idx: number = Number(num) + i
    const elementItem: LoteObject = listData[idx]
    if (elementItem) {
      element.listResult4555Index0.push(elementItem.numberResult)
      elementItem.numberResult.forEach((num2: string) => {
        element.setNumbersFromResult4555Index0.add(num2)
        const findItem = element.appearListData.find((item) => item.number === num2)
        if (findItem) {
          findItem.total++
        } else {
          const numberApear: ApearType = {
            number: num2,
            total: 1,
            isResult: element.nextItem?.numberResult.includes(num2) || false,
            isResult2: element.nextItem?.extraNumber === num2,
            isDuplicate: element.duplicateNumbers4555Index0.includes(num2),
          }
          element.appearListData.push(numberApear)
        }
      })
    }
  })

  if (element2) {
    element2.numberResult
      .filter((num0) => !filterList.includes(num0))
      .forEach((num: string) => {
        const idx: number = Number(num) + i
        const elementItem: LoteObject = listData[idx]
        if (elementItem) {
          element.listResult4555Index0.push(elementItem.numberResult)
          elementItem.numberResult.forEach((num2: string) => {
            element.setNumbersFromResult4555Index0.add(num2)
            const findItem = element.appearListData.find((item) => item.number === num2)
            if (findItem) {
              findItem.total++
            } else {
              const numberApear: ApearType = {
                number: num2,
                total: 1,
                isResult: element.nextItem?.numberResult.includes(num2) || false,
                isResult2: element.nextItem?.extraNumber === num2,
                isDuplicate: element.duplicateNumbers4555Index0.includes(num2),
              }
              element.appearListData.push(numberApear)
            }
          })
        }
      })
  }

  const sortTwoList = _.orderBy(element.appearListData, ['total'], ['asc'])

  for (let n = i; n < listData.length; n++) {
    const nearlyElement = listData[n]
    element.nearlyHowManyVersionFromIndex0 =
      element.nearlyHowManyVersionFromIndex0
        ? element.nearlyHowManyVersionFromIndex0 + 1
        : 1
    nearlyElement.numberResult.forEach((num: string) => {
      if (!element.nearlySetNumbersFromIndex0.has(num)) {
        element.nearlySetNumbersFromIndex0.add(num)
      }
    })
    if (element.nearlySetNumbersFromIndex0.size >= element.loteType) {
      break
    }
  }
  if (element.nearlySetNumbersFromIndex0.size < element.loteType) {
    element.nearlyHowManyVersionFromIndex0 = undefined
  }

  const numberSet = new Set<string>()
  element.appearListData.forEach((item) => {
    numberSet.add(item.number)
  })
  const appearO: ApearType[] = []
  element.nearlySetNumbersFromIndex0.forEach((number: string) => {
    if (numberSet.has(number)) {
      return
    }
    const appear: ApearType = {
      number,
      total: 0,
      isResult: element.nextItem?.numberResult.includes(number) || false,
      isResult2: element.nextItem?.extraNumber === number,
      isDuplicate: element.duplicateNumbers4555Index0.includes(number),
    }
    appearO.push(appear)
  })
  element.appearListTotal = [...appearO, ...sortTwoList]

  element.nearlySetNumbersFromIndex0.forEach((number: string) => {
    const findItem = element.appearListTotal.find((item) => item.number === number)
    if (findItem) {
      element.nearlyAppearList.push(findItem)
    }
  })
  element.nearlyAppearList = _.orderBy(
    element.nearlyAppearList,
    ['total'],
    ['asc'],
  )

  if (element.nextItem) {
    const indexSorted: number[] = []
    const mapNextResult =
      element.nextItem?.numberResult.filter((num) =>
        element.appearListTotal.some((item) => item.number === num),
      ).length || 0
    element.nextItem?.numberResult.forEach((num) => {
      const index = element.appearListTotal.findIndex((item) => item.number === num)
      const patternIndex = index % 6
      if (index !== -1) {
        indexSorted.push(index)
        if (mapNextResult === 6) {
          element.appearPatternListTotal[patternIndex]++
        }
      }
    })
    element.appearIndexListTotal = indexSorted
    const sorted = [...indexSorted].sort((a, b) => a - b)
    const distances = sorted.slice(1).map((val, i) => val - sorted[i])
    element.appearSpacingListIndexTotal = distances
  }

  if (element.nextItem) {
    const indexSorted: number[] = []
    element.nextItem?.numberResult.forEach((num) => {
      const index = element.nearlyAppearList.findIndex((item) => item.number === num)
      if (index !== -1) {
        indexSorted.push(index)
      }
    })
    element.nearlyIndexAppearList = indexSorted
    const sorted = [...indexSorted].sort((a, b) => a - b)
    const distances = sorted.slice(1).map((val, i) => val - sorted[i])
    element.nearlySpacingListIndex = distances
  }
}

let resultMap = 0
let filterTwoListSize = -1
let filterDuplicateTwoListSize = -1

function handleDisplayResultMapping(event: Event) {
  const target = event.target as HTMLSelectElement
  const size = Number(target.value)
  resultMap = size
  handleFilterDisplayFeature()
}
function columnDisplayMany(event: Event) {
  const target = event.target as HTMLSelectElement
  const column = Number(target.value)
  twoListColumn.value = column
}
function handleFilterNumbersApear(event: Event) {
  const target = event.target as HTMLSelectElement
  const size = Number(target.value)
  filterTwoListSize = size
  handleFilterDisplayFeature()
}
function handleFilterDuplicateResult(event: Event) {
  const target = event.target as HTMLSelectElement
  const size = Number(target.value)
  filterDuplicateTwoListSize = size
  handleFilterDisplayFeature()
}
function handleFilterDisplayFeature() {
  let listData55Filter = listData55
  let listData45Filter = listData45
  if (filterTwoListSize !== -1) {
    listData55Filter = listData55Filter.filter((item: LoteObject) => {
      return item.setNumbersFromResult4555Index0.size === filterTwoListSize
    })
    listData45Filter = listData45Filter.filter((item: LoteObject) => {
      return item.setNumbersFromResult4555Index0.size === filterTwoListSize
    })
  }
  if (filterDuplicateTwoListSize !== -1) {
    listData55Filter = listData55Filter.filter((item: LoteObject) => {
      return item.duplicateNumbers4555Index0.length === filterDuplicateTwoListSize
    })
    listData45Filter = listData45Filter.filter((item: LoteObject) => {
      return item.duplicateNumbers4555Index0.length === filterDuplicateTwoListSize
    })
  }
  if (resultMap !== 0) {
    listData55Filter = listData55Filter.filter((item: LoteObject) => {
      return (
        !item.nextItem?.numberResult ||
        item.nextItem?.numberResult.filter((num) =>
          item.setNumbersFromResult4555Index0.has(num),
        ).length === resultMap
      )
    })
    listData45Filter = listData45Filter.filter((item: LoteObject) => {
      return (
        !item.nextItem?.numberResult ||
        item.nextItem?.numberResult.filter((num) =>
          item.setNumbersFromResult4555Index0.has(num),
        ).length === resultMap
      )
    })
  }
  if (filterWithWeek.value) {
    listData55Filter = listData55Filter.filter(
      (item: LoteObject) => item.weekOfDate === filterWithWeek.value,
    )
    listData45Filter = listData45Filter.filter(
      (item: LoteObject) => item.weekOfDate === filterWithWeek.value,
    )
  }
  listData55Render.value = listData55Filter
  listData45Render.value = listData45Filter
}

function setFilterWith2ResultsCount6(
  listData: Array<LoteObject>,
  element: LoteObject,
  i: number,
) {
  if (element.nextItem) {
    const countNumber = new Set<string>()
    const listApear = listData.filter((item, index) => {
      if (index > i) {
        return (
          item.setNumbersFromResult4555Index0.size ===
          element.setNumbersFromResult4555Index0.size
        )
      }
    })
    for (let j = 0; j < listApear.length; j++) {
      const item = listApear[j]
      element.spacingCount6InAppear = element.spacingCount6InAppear
        ? element.spacingCount6InAppear + 1
        : 1
      if (countNumber.size <= 0) {
        element.spacingCount1InAppear = element.spacingCount1InAppear
          ? element.spacingCount1InAppear + 1
          : 1
      }
      item.appearIndexListTotal.forEach((index: number) => {
        const number = element.appearListTotal[index].number
        if (element.nextItem?.numberResult.includes(number)) {
          countNumber.add(number)
        }
      })
      if (countNumber.size === 6) {
        element.order6NumbersFromNextResult = [...countNumber]
        break
      }
    }
    if (countNumber.size <= 0) {
      element.spacingCount1InAppear = undefined
    }
    if (countNumber.size < 6) {
      element.spacingCount6InAppear = undefined
    }
  }
}

function runMainFeature(listData: Array<LoteObject>, offset: number = 0) {
  const oppositeListData = listData[0].loteType === 45 ? listData55 : listData45
  for (let i = 0; i < listData.length; i++) {
    const element = listData[i]
    const element2 = oppositeListData?.[i + offset]

    handleDisplayFeature(listData, element, element2, i)

    const total = element.setNumbersFromResult4555Index0.size || 0
    if (total >= 30 && total <= 55) {
      setFilterWith2Results.add(total)
    }

    const nextDate = new Date(element.nextTimestamp)
    const date = nextDate.getDate()
    const numberByNextDate = listData[date + i - 1]?.numberResult || []
    element.numberByNextDate = numberByNextDate || []
  }
  for (let i = 0; i < listData.length; i++) {
    const element = listData[i]
    setFilterWith2ResultsCount6(listData, element, i)
  }
}

function twoListResult(item: LoteObject) {
  return (
    item.nextItem?.numberResult.filter((num) =>
      item.setNumbersFromResult4555Index0.has(num),
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

function isFilterByDate(number: string, item: LoteObject): boolean {
  if (!hideNumbersFromDateToIndex.value) {
    return true
  }
  return !item.numberByNextDate.includes(number)
}

function duplicateNumbers(item: LoteObject, i: number): string[] {
  const data = item.loteType === 45 ? listData45 : listData55
  const listDupplicate: string[] = []
  item.duplicateNumbers4555Index0.forEach((num) => {
    listDupplicate.push(
      ...(data[Number(num) + i]?.numberResult ?? [])
    )
  })
  return listDupplicate
}

function dupplicateWithNumber(item: LoteObject, i: number): string[] {
  return item.nextItem?.numberResult.filter((num) => item.numbersFromResult4555Index0.includes(num)) || []
}

function isFilterDuplicateNumbers(number: string, item: LoteObject): boolean {
  if (!hideDuplicateNumbers.value) {
    return true
  }
  return !item.numbersFromResult4555Index0.includes(number)
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
    <div>Dự đoán cho: <span :style="{ color: 'greenyellow', fontSize: '18px' }">{{ predictionLoteType }}</span></div>
    <div>Mở tính năng: <input v-model="isDisplayFeature" type="checkbox" /></div>
  </div>
  <template v-if="isDisplayFeature">
    <template v-if="isDisplayFeature">
      <div>
        <div>
          Lọc ngày trong tuần:
          <select v-model="filterWithWeek" :style="{ width: '100px', height: '24px' }"
            @change="handleFilterDisplayFeature">
            <option value="">Tất cả</option>
            <option value="Tuesday">Thứ 3</option>
            <option value="Wednesday">Thứ 4</option>
            <option value="Thursday">Thứ 5</option>
            <option value="Friday">Thứ 6</option>
            <option value="Saturday">Thứ 7</option>
            <option value="Sunday">Chủ nhật</option>
          </select>
        </div>
        <div>
          <span>
            <input v-model="hideAppearIs0" type="checkbox" />
            Ẩn các số có số lần xuất hiện là 0
          </span>
        </div>
        <div>
          <span>
            <input v-model="hideNumbersFromDateToIndex" type="checkbox" /> Ẩn các số, lấy ngày làm chỉ mục,
          </span>
          <div :style="{ color: 'greenyellow' }">(ngày 24/07/2020 chỉ mục là 24, từ vị trí đó đếm tới 24 thì lấy kết
            quả)</div>
        </div>
        <div>
          <span>
            <input v-model="hideDuplicateNumbers" type="checkbox" /> Ẩn các số bởi trùng
          </span>
        </div>
        <div>
          Số cột danh sách hiển thị:
          <select v-model="twoListColumn" @change="columnDisplayMany" :style="{ width: '80px', height: '24px' }">
            <option value="10">10 Cột</option>
            <option value="9">9 Cột</option>
            <option value="8">8 Cột</option>
            <option value="7">7 Cột</option>
            <option value="6">6 Cột</option>
            <option value="5">5 Cột</option>
            <option value="4">4 Cột</option>
            <option value="3">3 Cột</option>
            <option value="2">2 Cột</option>
            <option value="1">1 Cột</option>
          </select>
        </div>
        <div>Lọc dữ liệu hiển thị:</div>
        <div>
          <select @change="handleDisplayResultMapping" :style="{ width: '160px', height: '24px' }">
            <option value="0">Số kết quả: tất cả</option>
            <option value="5">Số kết quả: 5</option>
            <option value="6">Số kết quả: 6</option>
          </select>
          <select v-model="filterWith2Result" :style="{ width: '150px', height: '24px' }">
            <option value="two-list">2 danh sách 45 và 55</option>
          </select>
          <template v-if="filterWith2Result === 'two-list'">
            <select @change="handleFilterNumbersApear" :style="{ width: '170px', height: '24px' }">
              <option v-for="(option, index) in arrayFilterFor2Result" :value="option.value" :key="index">
                Số lượng xuất hiện: {{ option.text }}
              </option>
            </select>
            <select @change="handleFilterDuplicateResult" :style="{ width: '170px', height: '24px' }">
              <option value="-1">Kết quả trùng: tất cả</option>
              <option value="0">Kết quả trùng: 0</option>
              <option value="1">Kết quả trùng: 1</option>
              <option value="2">Kết quả trùng: 2</option>
              <option value="3">Kết quả trùng: 3</option>
            </select>
          </template>
        </div>
      </div>
    </template>
  </template>
  <div class="content">
    <div>
      <div>Total: {{ listData55Render?.length }}</div>
      <div v-for="(item, index) in listData55Render?.slice(0, totalSelected)" :key="`listData-${index}`">
        <div class="number d-flex">
          <div :style="{ width: '200px' }">
            {{ item.date }}::{{ item.weekOfDate }}::{{ index }}::
          </div>
          <div>{{ item.numberResult }}</div>
        </div>
        <template v-if="isDisplayFeature">
          <div>
            Sô kết quả:
            <span :style="twoListResultStyle(item)">{{ twoListResult(item) }}</span>
          </div>
          <div>
            Số lượng xuất hiện: {{ item.setNumbersFromResult4555Index0.size }}
          </div>
          <div>
            Kết quả trùng: {{ item.duplicateNumbers4555Index0 }}
            <template v-if="item.nextItem">
              , Trùng với dự đoán: {{
                dupplicateWithNumber(item, index)
              }}
            </template>
          </div>
          <div>
            6 số xuất hiện gần nhất cách
            <span :style="{ color: 'red' }">{{
              item.nearlyHowManyVersionFromIndex0
                ? item.nearlyHowManyVersionFromIndex0
                : 'chưa có'
            }}</span>
            kỳ
            <div :style="{ color: 'greenyellow' }">
              (các số {{ item.numberResult }}
              xuất hiện từ
              <div>
                {{ item.nearlyHowManyVersionFromIndex0
                  ? item.nearlyHowManyVersionFromIndex0
                  : 'chưa có' }}
                kỳ trước đó)
              </div>
            </div>
          </div>
          <div>
            Lọc với
            <span :style="{ color: 'CadetBlue' }">{{
              item.setNumbersFromResult4555Index0.size
            }}</span>
            số đầu tiên xuất hiện gần nhất cách
            <span :style="{ color: 'red' }">{{
              item.spacingCount1InAppear
                ? item.spacingCount1InAppear
                : 'chưa có'
            }}</span>
            <div :style="{ color: 'greenyellow' }">
              (với danh sách có
              {{ item.setNumbersFromResult4555Index0.size }}
              xuất hiện thì 1 trong
              <div>
                các số {{ item.nextItem?.numberResult || [] }}
              </div>
              <div>
                sẽ xuất hiện gần nhất cách
                {{ item.spacingCount1InAppear
                  ? item.spacingCount1InAppear
                  : '"không xác định"' }}
                kỳ trước đó)
              </div>
            </div>
          </div>
          <div>
            Lọc với
            <span :style="{ color: 'CadetBlue' }">{{
              item.setNumbersFromResult4555Index0.size
            }}</span>
            6 số xuất hiện gần nhất cách
            <span :style="{ color: 'red' }">{{
              item.spacingCount6InAppear
                ? item.spacingCount6InAppear
                : 'chưa có'
            }}</span>
            <div :style="{ color: 'greenyellow' }">
              (với danh sách có
              {{ item.setNumbersFromResult4555Index0.size }}
              xuất hiện thì
              <div>các số {{ item.nextItem?.numberResult || [] }}</div>
              <div>
                sẽ xuất hiện gần nhất cách
                {{ item.spacingCount6InAppear
                  ? item.spacingCount6InAppear
                  : '"không xác định"' }}
                kỳ trước đó)
              </div>

            </div>
          </div>
          <div>Danh sách xuất hiện:</div>
          <div :style="{
            maxWidth: 34 * twoListColumn + 'px',
            flexWrap: 'wrap',
          }" class="d-flex">
            <template v-for="(numberTotal, indexNumberTotal) in item.appearListTotal">
              <div :key="`row-element${index}${indexNumberTotal}`" :style="{
                width: '34px',
              }" v-if="
                (numberTotal.total !== 0 || (numberTotal.total === 0 && !hideAppearIs0)) &&
                isFilterByDate(numberTotal.number, item) && isFilterDuplicateNumbers(numberTotal.number, item)">
                <span :style="resultNumberStyle(numberTotal)">{{ numberTotal.number }}:{{ numberTotal.total }}</span>
              </div>
            </template>
          </div>
        </template>
      </div>
    </div>
    <div>
      <div>Total: {{ listData45Render?.length }}</div>
      <div v-for="(item, index) in listData45Render?.slice(0, totalSelected)" :key="`listData-${index}`">
        <div class="number d-flex">
          <div :style="{ width: '200px' }">
            {{ item.date }}::{{ item.weekOfDate }}::{{ index }}::
          </div>
          <div>{{ item.numberResult }}</div>
        </div>
        <template v-if="isDisplayFeature">
          <div>
            Sô kết quả:
            <span :style="twoListResultStyle(item)">{{ twoListResult(item) }}</span>
          </div>
          <div>
            Số lượng xuất hiện: {{ item.setNumbersFromResult4555Index0.size }}
          </div>
          <div>
            Kết quả trùng: {{ item.duplicateNumbers4555Index0 }}
            <template v-if="item.nextItem">
              , Trùng với dự đoán: {{
                dupplicateWithNumber(item, index)
              }}
            </template>
          </div>
          <div>
            6 số xuất hiện gần nhất cách
            <span :style="{ color: 'red' }">{{
              item.nearlyHowManyVersionFromIndex0
                ? item.nearlyHowManyVersionFromIndex0
                : 'chưa có'
            }}</span>
            kỳ
            <div :style="{ color: 'greenyellow' }">
              ({{ item.numberResult }}
              xuất hiện từ
              {{ item.nearlyHowManyVersionFromIndex0
                ? item.nearlyHowManyVersionFromIndex0
                : 'chưa có' }}
              kỳ trước đó)
            </div>
          </div>
          <div>
            Lọc với
            <span :style="{ color: 'CadetBlue' }">{{
              item.setNumbersFromResult4555Index0.size
            }}</span>
            số đầu tiên xuất hiện gần nhất cách
            <span :style="{ color: 'red' }">{{
              item.spacingCount1InAppear
                ? item.spacingCount1InAppear
                : 'chưa có'
            }}</span>
            <div :style="{ color: 'greenyellow' }">
              (với danh sách có
              {{ item.setNumbersFromResult4555Index0.size }}
              xuất hiện thì 1 trong 6 số "dự đoán"
              <div>
                sẽ xuất hiện gần nhất cách
                {{ item.spacingCount1InAppear
                  ? item.spacingCount1InAppear
                  : '"không xác định"' }}
              </div>
              kỳ trước đó)
            </div>
          </div>
          <div>
            Lọc với
            <span :style="{ color: 'CadetBlue' }">{{
              item.setNumbersFromResult4555Index0.size
            }}</span>
            6 số xuất hiện gần nhất cách
            <span :style="{ color: 'red' }">{{
              item.spacingCount6InAppear
                ? item.spacingCount6InAppear
                : 'chưa có'
            }}</span>
            <div :style="{ color: 'greenyellow' }">
              (với danh sách có
              {{ item.setNumbersFromResult4555Index0.size }}
              xuất hiện thì 6 số "dự đoán"
              <div>
                sẽ xuất hiện gần nhất cách
                {{ item.spacingCount6InAppear
                  ? item.spacingCount6InAppear
                  : '"không xác định"' }}
              </div>
              kỳ trước đó)
            </div>
          </div>
          <div>Danh sách xuất hiện:</div>
          <div :style="{
            maxWidth: 34 * twoListColumn + 'px',
            flexWrap: 'wrap',
          }" class="d-flex value-color">
            <template v-for="(numberTotal, indexNumberTotal) in item.appearListTotal">
              <div :key="`row-element${index}${indexNumberTotal}`" :style="{
                width: '34px',
              }" v-if="
                (numberTotal.total !== 0 || (numberTotal.total === 0 && !hideAppearIs0)) &&
                isFilterByDate(numberTotal.number, item) && isFilterDuplicateNumbers(numberTotal.number, item)">
                <span :style="resultNumberStyle(numberTotal)">{{ numberTotal.number }}:{{ numberTotal.total }}</span>
              </div>
            </template>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<style lang="css">
body {
  background: linear-gradient(to right, #1F1C18, #8E0E00);
  color: #CCFF00;
}

.content {
  display: flex;
  gap: 12px;
}

.number {
  color: coral;
}

.d-flex {
  display: flex;
  align-items: center;
}
</style>
