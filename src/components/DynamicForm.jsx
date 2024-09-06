import React from "react";
import { useForm, watch } from "react-hook-form";
import styles from "./DynamicForm.module.css";

function DynamicForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const firstName = watch("firstName"); // Отслеживаем значение первого поля

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <label>First Name:</label>
        <input {...register("firstName", { required: true, minLength: 3 })} />
        {errors.firstName && (
          <span className={styles.error}>Minimum length is 3 characters</span>
        )}
      </div>

      {/* Отображаем второе поле только если первое поле валидно */}
      {firstName?.length >= 3 && (
        <div>
          <label>Last Name:</label>
          <input {...register("lastName", { required: true })} />
          {errors.lastName && (
            <span className={styles.error}>This field is required</span>
          )}
        </div>
      )}

      <button type="submit">Submit</button>
    </form>
  );
}

export default DynamicForm;

// function DynamicForm() {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

//   const firstName = watch("firstName"); // Отслеживаем значение первого поля

//   const onSubmit = (data) => {
//     console.log(data);

//     return (
//       <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
//         <div>
//           <label>First Name:</label>
//           <input {...register("firstName", { required: true, minLength: 3 })} />
//           {errors.firstName && (
//             <span className={styles.error}>Minimum length is 3 characters</span>
//           )}
//         </div>

//         {/* Отображаем второе поле только если первое поле валидно */}
//         {firstName?.length >= 3 && (
//           <div>
//             <label>Last Name:</label>
//             <input {...register("lastName", { required: true })} />
//             {errors.lastName && (
//               <span className={styles.error}>This field is required</span>
//             )}
//           </div>
//         )}

//         <button type="submit">Submit</button>
//       </form>
//     );
//   };
// }
// export default DynamicForm;
