<script setup lang="ts">
import { ref } from 'vue'
import moment from 'moment'
import _, { cloneDeep } from 'lodash'
import { getLote45, getLote55 } from '@/composables/lote'
import { LoteObject, type ApearType } from '@/types/lote'
import { findCommonValues, sortNestedArray } from '@/utils'

const listData45: Array<LoteObject> = getLote45()
const listData55: Array<LoteObject> = getLote55()

const momentDate1 = moment(listData45[0].date, 'DD/MM/YYYY')
const momentDate2 = moment(listData55[0].date, 'DD/MM/YYYY')
const predictionLoteType: number = momentDate1 > momentDate2 ? 55 : 45

const offsetLoteType55: number = predictionLoteType === 55 ? 0 : -1
const offsetLoteType45: number = predictionLoteType === 45 ? 0 : -1

const matrixDisplayData = ref<string[][][]>([])
const commonNumbersMatrix = ref<Set<string>[]>([])
const indexDisplayMatrix: number[][] = []
const onlyFirstItem = ref<boolean>(true)
const appearNumberValue = ref<number>(46)
const fromIndex = ref<number>(0)
const toIndex = ref<number>(1)
const hideSameCurrentNumbers = ref<boolean>(true)
const hideNumbersDifferentBetweenMatrics = ref<boolean>(true)
const hideMatrixNotSame6NextNumbes = ref<boolean>(false)

const atLeastNumberValue = ref<number>(46)
const indexAtLeastNumbersData: number[][] = []

const equalNumberValue = ref<string>('46')
const indexEqualNumbersData: number[][] = []

function displayData55() {
  console.group('Hiển thị danh sách 55:')
  indexDisplayMatrix.length = 0
  matrixDisplayData.value.length = 0
  commonNumbersMatrix.value.length = 0
  const from = fromIndex.value
  const to = toIndex.value
  for (let i = from; i <= to; i++) {
    const element = listData55[i]
    const limit = appearNumberValue.value
    let apearList: ApearType[] = []
    let list55Prototype: ApearType[] = []
    const nextNumbers = element.nextItem?.numberResult || []
    const endList: string[][] = []
    const idxList: number[][] = []
    element.numberResult.forEach((num) => {
      const newIndex = Number(num)
      const el55 = listData55[newIndex + i]
      if (el55) {
        el55.numberResult.forEach((num2) => {
          const findItem = apearList.find((item) => item.number === num2)
          if (findItem) {
            findItem.total++
          } else {
            apearList.push({ number: num2, total: 1, isResult: false, isResult2: false, isDuplicate: false })
          }
        })
      }
    })
    if (apearList.length > 0) {
      list55Prototype = cloneDeep(apearList)
      for (let k = i; k < listData55.length - 1; k++) {
        apearList = cloneDeep(list55Prototype)
        const element45 = listData45[k]
        element45.numberResult.forEach((num) => {
          const newIndex = Number(num)
          const el55By45 = listData55[k + newIndex]
          if (el55By45) {
            el55By45.numberResult.forEach((num2) => {
              const findItem = apearList.find((item) => item.number === num2)
              if (findItem) {
                findItem.total++
              } else {
                apearList.push({ number: num2, total: 1, isResult: false, isResult2: false, isDuplicate: false })
              }
            })
          }
        })
        const list = _.orderBy(apearList, ['total'], ['asc']).map((item) => item.number)
        if (list.length >= limit) {
          endList.push(list)
          const indexList: number[] = []
          nextNumbers.forEach((num11) => {
            const idx = list.findIndex((num) => num === num11)
            if (idx !== -1) {
              indexList.push(idx)
            }
          })
          if (list.filter((n) => nextNumbers.includes(n)).length === 6) {
            idxList.push(indexList.sort((a, b) => a - b))
          }
        }
      }

      indexDisplayMatrix.push(...idxList)
      matrixDisplayData.value.push(endList)
      commonNumbersMatrix.value.push(findCommonValues(endList))
    }
  }
  console.log('danh sách chỉ mục của các ma trận: ', indexDisplayMatrix);
  console.log('danh sách ma trận: ', matrixDisplayData.value);
  console.log('danh sách các số chung giữa các ma trận: ', commonNumbersMatrix.value);
  console.groupEnd();
}

function generateIndexAtLeastNumberValue() {
  console.group('Tạo tất cả không theo from và to:')
  console.log('Tiến trình đang chạy ........');
  for (let i = 0; i < listData55.length - 1; i++) {
    const element = listData55[i]
    let apearList: ApearType[] = []
    let list55Prototype: ApearType[] = []
    const nextNumbers = element.nextItem?.numberResult || []
    const endList: string[][] = []
    const idxList: number[][] = []
    element.numberResult.forEach((num) => {
      const newIndex = Number(num)
      const el55 = listData55[newIndex + i]
      if (el55) {
        el55.numberResult.forEach((num2) => {
          const findItem = apearList.find((item) => item.number === num2)
          if (findItem) {
            findItem.total++
          } else {
            apearList.push({ number: num2, total: 1, isResult: false, isResult2: false, isDuplicate: false })
          }
        })
      }
    })
    if (apearList.length > 0) {
      list55Prototype = cloneDeep(apearList)
      for (let k = i; k < listData55.length - 1; k++) {
        apearList = cloneDeep(list55Prototype)
        const element45 = listData45[k]
        element45.numberResult.forEach((num) => {
          const newIndex = Number(num)
          const el55By45 = listData55[k + newIndex]
          if (el55By45) {
            el55By45.numberResult.forEach((num2) => {
              const findItem = apearList.find((item) => item.number === num2)
              if (findItem) {
                findItem.total++
              } else {
                apearList.push({ number: num2, total: 1, isResult: false, isResult2: false, isDuplicate: false })
              }
            })
          }
        })
        const list = _.orderBy(apearList, ['total'], ['asc']).map((item) => item.number)
        if (list.length >= atLeastNumberValue.value) {
          endList.push(list)
          const indexList: number[] = []
          nextNumbers.forEach((num11) => {
            const idx = list.findIndex((num) => num === num11)
            if (idx !== -1) {
              indexList.push(idx)
            }
          })
          if (list.filter((n) => nextNumbers.includes(n)).length === 6) {
            idxList.push(indexList.sort((a, b) => a - b))
          }
        }
      }
      indexAtLeastNumbersData.push(...idxList)
    }
  }
  console.log("Hoàn tất tạo tất cả không theo from và to: ", indexAtLeastNumbersData);
  console.groupEnd()
}

function generateIndexEqualNumberValue() {
  console.group(`Tạo json từ tất cả dữ liệu 55: với các số xuất hiện = ${equalNumberValue.value}`)
  console.log('Tiến trình đang chạy ........');
  indexEqualNumbersData.length = 0
  const numj = Number(equalNumberValue.value.trim())
  for (let i = 0; i < listData55.length - 1; i++) {
    const element = listData55[i]
    const nextNumbers = element.nextItem?.numberResult || []
    let apearList: ApearType[] = []
    let list55Prototype: ApearType[] = []
    element.numberResult.forEach((num) => {
      const newIndex = Number(num)
      const el55 = listData55[newIndex + i]
      if (el55) {
        el55.numberResult.forEach((num2) => {
          const findItem = apearList.find((item) => item.number === num2)
          if (findItem) {
            findItem.total++
          } else {
            apearList.push({ number: num2, total: 1, isResult: false, isResult2: false, isDuplicate: false })
          }
        })
      }
    })
    if (apearList.length === 0) continue
    list55Prototype = cloneDeep(apearList)
    for (let k = i; k < listData55.length - 1; k++) {
      apearList = cloneDeep(list55Prototype)
      const element45 = listData45[k]
      element45.numberResult.forEach((num) => {
        const newIndex = Number(num)
        const el55By45 = listData55[k + newIndex]
        if (el55By45) {
          el55By45.numberResult.forEach((num2) => {
            const findItem = apearList.find((item) => item.number === num2)
            if (findItem) {
              findItem.total++
            } else {
              apearList.push({ number: num2, total: 1, isResult: false, isResult2: false, isDuplicate: false })
            }
          })
        }
      })
      const list = _.orderBy(apearList, ['total'], ['asc']).map((item) => item.number)
      if (list.length === numj) {
        const total = list.filter((n) => nextNumbers.includes(n)).length
        if (total === 6) {
          const indexList: number[] = []
          nextNumbers.forEach((num11) => {
            const idx = list.findIndex((num) => num === num11)
            if (idx !== -1) {
              indexList.push(idx)
            }
          })
          indexEqualNumbersData.push(indexList)
        }
      }
    }
  }
  console.log(`Hoàn tất tạo json "chỉ mục" từ tất cả dữ liệu 55: với các số xuất hiện = ${equalNumberValue.value}: `, indexEqualNumbersData)
  console.groupEnd()
}

function generateIndexFromCommonMatrix() {
  console.group('Tạo json "chỉ mục" từ tất cả ma trận có số chung')
  console.log('Tiến trình đang chạy .......');
  let countMatrixWithCommon = 0
  const indexListCommon: number[][] = []
  for (let i = 0; i < listData55.length - 1; i++) {
    const element = listData55[i]
    let apearList: ApearType[] = []
    let list55Prototype: ApearType[] = []
    const nextNumbers = element.nextItem?.numberResult || []
    const endList: string[][] = []

    element.numberResult.forEach((num) => {
      const newIndex = Number(num)
      const el55 = listData55[newIndex + i]
      if (el55) {
        el55.numberResult.forEach((num2) => {
          const findItem = apearList.find((item) => item.number === num2)
          if (findItem) {
            findItem.total++
          } else {
            apearList.push({ number: num2, total: 1, isResult: false, isResult2: false, isDuplicate: false })
          }
        })
      }
    })
    if (apearList.length > 0) {
      list55Prototype = cloneDeep(apearList)
      for (let k = i; k < listData55.length - 1; k++) {
        apearList = cloneDeep(list55Prototype)
        const element45 = listData45[k]
        element45.numberResult.forEach((num) => {
          const newIndex = Number(num)
          const el55By45 = listData55[k + newIndex]
          if (el55By45) {
            el55By45.numberResult.forEach((num2) => {
              const findItem = apearList.find((item) => item.number === num2)
              if (findItem) {
                findItem.total++
              } else {
                apearList.push({ number: num2, total: 1, isResult: false, isResult2: false, isDuplicate: false })
              }
            })
          }
        })
        const list = _.orderBy(apearList, ['total'], ['asc']).map((item) => item.number)
        endList.push(list)
      }
      const commonList = findCommonValues(endList)
      if (commonList.size > 0) {
        countMatrixWithCommon++
        const commonArray = [...commonList]
        const matched = nextNumbers.filter((n) => commonList.has(n))
        if (matched.length === 6) {
          const indexList = matched.map((n) => commonArray.indexOf(n))
          indexListCommon.push(indexList.sort((a, b) => a - b))
        }
      }
    }
  }
  console.log('Hoàn tất tạo json "chỉ mục" từ ma trận có số chung:')
  console.log(`Có ${indexListCommon.length}/${countMatrixWithCommon} danh sách dự đoán được 6 số`);
  console.log(indexListCommon);
  console.groupEnd()
}

function getNotCommonAnd6(indexMatrix: number, matrix: string[][]): boolean {
  const element = listData55[indexMatrix]
  if (!element?.nextItem) return true
  const firstMetric: string[] = matrix[0] || []
  if (firstMetric.length === 0) return true
  const totalCommon = element?.nextItem?.numberResult.filter((num) => commonNumbersMatrix.value[indexMatrix].has(num)).length
  return totalCommon >= 6
}

function colorNumber(numberResult1: string[] = [], numberResult2: string[] = []): string[] {
  const result = [...numberResult1]
  result.forEach((num, idx) => {
    if (numberResult2.includes(num)) {
      result[idx] = `<span style="color: red;">${num}</span>`
    }
  })
  return result
}

function hideCurrent(indexMatrix: number, number: string): boolean {
  if (hideSameCurrentNumbers.value) {
    const element = listData55[indexMatrix]
    const currentNumbers = element.numberResult || []
    const isSameCurrent = currentNumbers.includes(number)
    return !isSameCurrent
  }
  return true
}

</script>
<template>
  <div>
    <div>
      <div>
        Tạo các ma trận
        <div>mỗi ma trận có các số xuất hiện >=
          <select v-model="appearNumberValue" :style="{ height: '22px', width: '50px' }">
            <option :value="45">45</option>
            <option :value="46">46</option>
            <option :value="47">47</option>
            <option :value="48">48</option>
            <option :value="49">49</option>
            <option :value="50">50</option>
          </select>
        </div>
        <div>
          chỉ hiện từ index:
          <input v-model="fromIndex" type="text" :style="{ width: '50px' }">
          đến:
          <input v-model="toIndex" type="text" :style="{ width: '50px' }">
        </div>
        <button @click="displayData55">Bấm để hiển thị</button>
      </div>
      <div>=== Phần lọc ===</div>
      <div>
        Chỉ hiện phần tử đầu tiên:
        <input v-model="onlyFirstItem" type="checkbox">
      </div>
      <div>
        Ẩn các số giống nhau với kết quả hiện tại:
        <input v-model="hideSameCurrentNumbers" type="checkbox">
        : <span
          :style="{ background: 'green', width: '18px', height: '18px', display: 'inline-block', color: 'white' }">55</span>
      </div>
      <div>
        Ẩn các số khác nhau giữa các ma trận:
        <input v-model="hideNumbersDifferentBetweenMatrics" type="checkbox">
        : <span
          :style="{ width: '18px', height: '18px', display: 'inline-block', border: '1px solid #CCFFFF' }">55</span>
      </div>
      <div>
        Ẩn các danh sách không chứa hoàn toàn với kết quả kế tiếp:
        <input v-model="hideMatrixNotSame6NextNumbes" type="checkbox">
      </div>
      <div>============================</div>
      <div>
        Tạo json "chỉ mục" từ tất cả dữ liệu 55:
      </div>
      theo các số lần xuất hiện trong danh sách >=
      <select v-model="atLeastNumberValue" :style="{ height: '22px', width: '50px' }">
        <option :value="45">45</option>
        <option :value="46">46</option>
        <option :value="47">47</option>
        <option :value="48">48</option>
        <option :value="49">49</option>
        <option :value="50">50</option>
      </select>
      <div>
        <button @click="generateIndexAtLeastNumberValue">Bấm để tạo json</button>
      </div>
    </div>
    <div>============================</div>
    <div>
      Tạo json "chỉ mục" từ tất cả dữ liệu 55
      <div>
        theo các số lần xuất hiện trong danh sách:
        <input type="text" v-model="equalNumberValue" :style="{ width: '30px' }">
      </div>
      <button @click="generateIndexEqualNumberValue">Bấm để tạo json</button>
    </div>
    <div>============================</div>
    <div>
      Tạo json "chỉ mục" từ tất cả ma trận có số chung
      <div>
        <button @click="generateIndexFromCommonMatrix">Bấm để tạo json</button>
      </div>
    </div>
    <div>============================</div>
    <div>
      <div v-for="(matrix, indexMatrix) in matrixDisplayData" :key="indexMatrix">
        <div :style="{ color: 'greenyellow', fontSize: '22px', padding: '8px' }">Data: {{ indexMatrix }}</div>
        <div>Có {{ matrix.length }} ma trận</div>
        <div :style="{ color: 'violet', fontSize: '16px' }">Có {{ commonNumbersMatrix[indexMatrix]?.size || 0 }} số
          chung
          giữa các ma trận: </div>
        <div :style="{ color: 'greenyellow', fontSize: '16px' }">
          Kết quả hiện tại: <div
            v-html="colorNumber(listData55[indexMatrix]?.numberResult, listData55[indexMatrix]?.nextItem?.numberResult)">
          </div>
        </div>
        <div :style="{ color: 'blueviolet', fontSize: '16px' }">
          Kết quả tiếp theo: <div
            v-html="colorNumber(listData55[indexMatrix]?.nextItem?.numberResult, listData55[indexMatrix]?.numberResult)">
          </div>
        </div>
        <template v-if="!hideMatrixNotSame6NextNumbes || getNotCommonAnd6(indexMatrix, matrix)">
          <div class="flex flex-wrap gap-20">
            <div v-for="(subMatrix, subIndex) in (onlyFirstItem ? [matrix[0]] : matrix)" :key="subIndex"
              class="matrix flex flex-wrap gap-10">
              <template v-for="(number, numberIndex) in subMatrix">
                <template v-if="hideCurrent(indexMatrix, number)">
                  <div v-if="!hideNumbersDifferentBetweenMatrics || commonNumbersMatrix[indexMatrix].has(number)"
                    :key="numberIndex" :style="{
                      border: !commonNumbersMatrix[indexMatrix].has(number) ? '1px solid #CCFFFF' : '',
                      color: listData55[indexMatrix]?.nextItem?.numberResult.includes(number) ? '#33FFFF' : '',
                      backgroundColor: listData55[indexMatrix]?.numberResult.includes(number) ? 'green' : '',
                    }">{{ number }}</div>
                </template>
              </template>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<style lang="css">
.flex {
  display: flex;
}

.gap-10 {
  gap: 10px;
}

.gap-20 {
  gap: 20px;
}

.flex-wrap {
  flex-wrap: wrap;
}

.matrix {
  width: 160px;
}
</style>
