$(document).ready(function() {
    function addTask() {
      var taskText = $('#newTask').val();

      if (taskText.trim() !== '') {
        var newTaskItem = $('<li>').text(taskText);
        newTaskItem.append('<button class="completeTask"><i class="fa-solid fa-check" style="color: #52b950;"></i></button>');
        newTaskItem.append('<button class="deleteTask"><i class="fa-solid fa-trash" style="color: #565e6c;"></i></button>');

        $('#list').append(newTaskItem);
        $('#newTask').val('');
      }
    }
    function deleteTask() {
      $(this).parent().remove();
    }

    function completeTask() {
      $(this).parent().toggleClass('completed');
    }

    $('#addTask').on('click', addTask);

    $('#newTask').on('keypress', function(event) {
      if (event.keyCode === 13) {
        addTask();
      }
    });

    $('#list').on('click', '.deleteTask', deleteTask);

    $('#list').on('click', '.completeTask', completeTask);
  });