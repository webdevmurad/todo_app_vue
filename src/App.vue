<template lang="pug">
    div#app
        div.todo
            div.todo__header
                h4 Список задач
            TaskField(
                @onAddTask="onAddTask"
            )
            div.todo-list
                ListItem(
                    v-for="(task, index) in tasks" 
                    :key="index" 
                    :text="task.text" 
                    :completed="task.completed"
                    :index="index"
                    @onToggleCompleted="onToggleCompleted"
                    @onRemoveTask="onRemoveTask"
                )
</template>

<script>

import ListItem from '@/components/ListItem';
import TaskField from '@/components/TaskField';

export default {
    name: 'App',
    data: () => ({
        tasks: [
            {
                text: 'Изучить VueJS',
                completed: false
            },
            {
                text: 'Изучить ReactJS',
                completed: true
            }
        ]
    }),
    methods: {
        onToggleCompleted(index) {
            this.tasks[index].completed = !this.tasks[index].completed
        },
        onRemoveTask(index) {
            this.tasks.splice(index, 1)
        },
        onAddTask(text) {
            this.tasks.push({
                text,
                completed: false
            })
        }
    },
    components: {
        ListItem,
        TaskField
    }
}
</script>

<style lang="sass">
*
    padding: 0
    margin: 0
    box-sizing: border-box

#app 
    font-family: Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: #2c3e50
    margin-top: 100px   
    display: flex
    align-items: center
    justify-content: center

.todo 
    width: 500px
    height: 500px
    border-radius: 10px
    overflow: hidden
    -webkit-box-shadow: 0px 0px 24px 2px #000000
    box-shadow: 0px 0px 24px 2px #000000
    &__header 
        padding: 20px
        background-color: #259CD8
    &__header h4 
        color: white
        font-size: 20px
        font-family: Helvetica
    &__app
        &-field 
            display: flex
            justify-content: space-between
            align-items: center
            padding: 20px
            &-input 
                width: 80%
                height: 40px
                font-family: Helvetica
                font-size: 20px
                border: none
                border-bottom: 1px solid #E1E1E3
                outline: none
            &-plus 
                fill: #E1E1E3
                transition: 0.5s
                outline: none
            &-button 
                display: flex
                align-items: center
                justify-content: center
                border: none
                background: transparent
                outline: none
                
                &:hover 
                    cursor: pointer
                &:hover .todo__app-field-plus
                    fill: red
                    transition: 0.5s
    &__list 
        &-left
            &-block 
                display: flex
                width: 100%
                &:hover 
                    cursor: pointer
        &-items 
            display: flex
            justify-content: space-between
            align-items: center
            margin-bottom: 20px
            padding-left: 20px 
            padding-right: 20px

            
        &-item
            &-check
                margin-right: 20px
                width: 20px 
                height: 20px
                border-radius: 50%
                border: 1px solid #259CD8
                overflow: hidden
                transition: .3s
                svg 
                    fill: white
            &-text 
                font-size: 20px
            &-remove
                svg 
                    fill: #E1E1E3
                &:hover svg
                    cursor: pointer
                    fill: red
    &-list 
        overflow: auto
        height: calc( 100% - 136px ) 
        &__completed 
            .todo__list-item-check svg 
                transition: 0.3s
                fill: #259CD8
            .todo__list-item-check
                border: 1px solid white
            .todo__list-item-text
                transition: 0.3s
                text-decoration: line-through




</style>
