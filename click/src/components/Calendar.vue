<template>
  <div>
    <!-- Date Input -->
    <!-- <div class="calendar-input"> -->
      <label for="selectedDate">Select a date: </label>
      <input
        id="selectedDate"
        type="date"
        v-model="selectedInputDate"
        :min="minDate"
        :max="maxDate"
        @input="onInputDateChange"
        @focus="showCalendar = true"
        @blur="hideCalendar"
      />
    <!-- </div> -->

    <!-- Calendar -->
    <!-- <div
      class="calendar"
      v-if="showCalendar"
      @mouseenter="hovering = true"
      @mouseleave="hovering = false"
    > -->
      <!-- Calendar Header -->
      <!-- <div class="calendar-header">
        <button @click="prevMonth">←</button>
        <h2>{{ months[currentMonth] }} {{ currentYear }}</h2>
        <button @click="nextMonth">→</button>
      </div> -->

      <!-- Day Names -->
      <!-- <div class="calendar-days">
        <div v-for="day in weekDays" :key="day" class="day-name">
          {{ day }}
        </div>
      </div> -->

      <!-- Dates -->
      <!-- <div class="calendar-dates">
        <div
          v-for="(day, index) in calendarDays"
          :key="index"
          class="calendar-date"
          :class="{
            'is-today': day.isToday,
            'is-disabled': !day.isCurrentMonth,
            'is-selected': isSelectedDate(day.date),
          }"
          @click="selectDate(day.date)"
        >
          {{ day.date.getDate() }}
        </div>
      </div> -->
    <!-- </div> -->
  </div>
</template>

<script>
import { ref, computed, onMounted, watch } from 'vue';

export default {
  name: 'Calendar',
  props: {
    initialDate: {
      type: String,
      default: () => new Date().toISOString().split('T')[0],
    },
    minDate: {
      type: String,
      default: () => '2023-01-01', // Adjust as needed
    },
    maxDate: {
      type: String,
      default: () => '2025-12-31', // Adjust as needed
    },
  },
  setup(props, { emit }) {
    const today = new Date();
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    const currentYear = ref(today.getFullYear());
    const currentMonth = ref(today.getMonth());
    const selectedInputDate = ref(props.initialDate);
    const showCalendar = ref(false);
    const hovering = ref(false);

    const calendarDays = computed(() => {
      const firstDayOfMonth = new Date(currentYear.value, currentMonth.value, 1);
      const lastDayOfMonth = new Date(currentYear.value, currentMonth.value + 1, 0);

      const startDay = firstDayOfMonth.getDay();
      const daysFromPreviousMonth = Array.from({ length: startDay }, (_, i) => {
        const date = new Date(currentYear.value, currentMonth.value, i - startDay + 1);
        return { date, isCurrentMonth: false, isToday: false };
      });

      const daysInCurrentMonth = Array.from({ length: lastDayOfMonth.getDate() }, (_, i) => {
        const date = new Date(currentYear.value, currentMonth.value, i + 1);
        return { date, isCurrentMonth: true, isToday: isToday(date) };
      });

      const endDay = lastDayOfMonth.getDay();
      const daysFromNextMonth = Array.from({ length: 6 - endDay }, (_, i) => {
        const date = new Date(currentYear.value, currentMonth.value + 1, i + 1);
        return { date, isCurrentMonth: false, isToday: false };
      });

      return [
        ...daysFromPreviousMonth,
        ...daysInCurrentMonth,
        ...daysFromNextMonth,
      ].filter(day => {
        const dayDate = day.date;
        return isWithinDateRange(dayDate);
      });
    });

    const isWithinDateRange = (date) => {
      const minDate = new Date(props.minDate);
      const maxDate = new Date(props.maxDate);
      return date >= minDate && date <= maxDate;
    };

    const isToday = (date) => {
      return date.getDate() === today.getDate() &&
             date.getMonth() === today.getMonth() &&
             date.getFullYear() === today.getFullYear();
    };

    const isSelectedDate = (date) => {
      if (!selectedInputDate.value) return false;
      const selectedDate = new Date(selectedInputDate.value);
      return date.getDate() === selectedDate.getDate() &&
             date.getMonth() === selectedDate.getMonth() &&
             date.getFullYear() === selectedDate.getFullYear();
    };

    const onInputDateChange = () => {
      const selectedDate = new Date(selectedInputDate.value);
      currentYear.value = selectedDate.getFullYear();
      currentMonth.value = selectedDate.getMonth();
      emit('date-selected', selectedInputDate.value);
    };

    const selectDate = (date) => {
      const selected = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      selectedInputDate.value = selected.toISOString().split('T')[0];
      emit('date-selected', selectedInputDate.value);
      showCalendar.value = false; // Hide calendar after selection
    };

    const prevMonth = () => {
      if (currentMonth.value === 0) {
        currentMonth.value = 11;
        currentYear.value -= 1;
      } else {
        currentMonth.value -= 1;
      }
    };

    const nextMonth = () => {
      if (currentMonth.value === 11) {
        currentMonth.value = 0;
        currentYear.value += 1;
      } else {
        currentMonth.value += 1;
      }
    };

    const hideCalendar = () => {
      setTimeout(() => {
        if (!hovering.value) {
          showCalendar.value = false;
        }
      }, 200);
    };

    return {
      months,
      weekDays,
      currentYear,
      currentMonth,
      selectedInputDate,
      calendarDays,
      showCalendar,
      prevMonth,
      nextMonth,
      isSelectedDate,
      onInputDateChange,
      selectDate,
      hideCalendar,
    };
  },
};
</script>

      
<style scoped>
/* Add your styles here */
.calendar {
  max-width: 400px;
  margin: 20px auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  /* font-family: Arial, sans-serif; */
}

.calendar-input {
  margin-bottom: 10px;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.calendar-days,
.calendar-dates {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.day-name {
  font-weight: bold;
  padding: 5px;
}

.calendar-date {
  padding: 10px;
  border: 1px solid #f0f0f0;
  cursor: pointer;
}

.calendar-date:hover {
  background-color: #f5f5f5;
  border-radius: 100%;
}

.is-today {
  background-color: #d4edda;
  border-color: #c3e6cb;
  border-radius: 100%;
}

.is-disabled {
  color: #ccc;
  pointer-events: none;
  border-radius: 100%;
}

.is-selected {
  background-color: #cce5ff;
  border-color: #b8daff;
  border-radius: 100%;
}
</style>
            