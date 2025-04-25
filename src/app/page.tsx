"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUpFormSchema = z.object({
  name: z.string().min(2, "Mínimo 2 letras").max(20, "Máximo 20 letras"),
  lastName: z.string().optional(),
  age: z.number({ invalid_type_error: "Idade precisa ser um número"}).min(18, "Mínimo 18 anos")
});

type SignUpFormData = z.infer<typeof SignUpFormSchema>;

export const Page = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormData>({
    resolver: zodResolver(SignUpFormSchema),
  });

  const handleSignUpForm = () => {
    alert("Cadastrado com sucesso");
  };



  

  return (
    <div>
      <form onSubmit={handleSubmit(handleSignUpForm)}>

        <div>
          <input
            {...register("name")}
            className="bg-white text-black"
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <input
            {...register("lastName")}
            className="bg-white text-black"
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>

        <div>
          <input
            type="number"
            {...register("age", { valueAsNumber: true })}
            className="bg-white text-black"
          />
          {errors.age && <p>{errors.age.message}</p>}
        </div>

        <input type="submit" value={"Cadastrar"} />


      </form>

  
    </div>
  );
};

export default Page;