'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import ClickAwayListener from 'react-click-away-listener'
import { toast } from 'react-toastify'

type Inputs = {
  name: string
  organization: string
  phoneNumber: string
  email: string
  message: string
}

const topics = ['Торговля', 'Производство', 'Консалтинг']

export default function Form({ dictionary }: { dictionary: any }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<Inputs>({ shouldFocusError: false, reValidateMode: 'onSubmit' })

  const [selected, setSelected] = useState<string | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number>()
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false)
  const [isSelectedError, setIsSelectedError] = useState<boolean>(false)

  const router = useRouter()

  const onSubmit: SubmitHandler<Inputs> = async data => {
    if (isSelectedError) return

    router.push('/')

    const res = await fetch('/api/send-email', {
      method: 'POST',
      body: JSON.stringify({
        name: data.name,
        organization: data.organization,
        phone: data.phoneNumber,
        email: data.email,
        message: data.message,
        topic: topics[selectedIndex!],
      }),
    })

    if (!res.ok) {
      toast.error(dictionary.emailError, {
        position: 'bottom-right',
        hideProgressBar: true,
        style: {
          lineHeight: '140%',
        },
      })
    }

    toast.success(dictionary.emailMessage, {
      position: 'bottom-right',
      hideProgressBar: true,
      style: {
        lineHeight: '140%',
      },
    })
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-[40px]"
    >
      <div className="flex flex-col gap-[12px] relative max-[380px]:w-[280px]">
        <label className="text-[16px] leading-[100%] font-normal self-start">
          {dictionary.name.title} <span className="text-red-500">*</span>
        </label>
        <input
          className={`text-[14px] w-[320px] h-[40px] py-[13px] px-[16px] border-[1px] border-grey-border-color placeholder:text-[14px] placeholder:font-normal font-normal focus:border-blue-text focus:outline-none rounded-[4px] ${
            errors.name?.type === 'required' && 'border-red-500'
          } max-[380px]:w-[280px]`}
          type="text"
          {...register('name', {
            required: true,
            pattern: {
              value: /.*\S.*/,
              message: dictionary.errors.empty,
            },
          })}
          placeholder={dictionary.name.placeholder}
          onFocus={() => {
            clearErrors()
            setIsSelectedError(false)
          }}
          onChange={() => {
            if (Object.keys(errors).length !== 0) {
              clearErrors()
              if (isSelectedError) setIsSelectedError(false)
            }
          }}
        />
        {errors.name?.type === 'required' && (
          <p className="absolute text-[12px] text-red-500 top-[110%]">
            {dictionary.errors.required}
          </p>
        )}
        {errors.name?.type === 'pattern' && (
          <p className="absolute text-[12px] text-red-500 top-[105%]">
            {errors.name.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-[12px] max-[380px]:w-[280px] relative">
        <label className="text-[16px] leading-[100%] font-normal self-start">
          {dictionary.organization.title}
        </label>
        <input
          className="text-[14px] w-[320px] h-[40px] py-[13px] px-[16px] border-[1px] border-grey-border-color placeholder:text-[14px] placeholder:font-normal font-normal focus:border-blue-text focus:outline-none rounded-[4px] max-[380px]:w-[280px]"
          type="text"
          placeholder={dictionary.organization.placeholder}
          {...register('organization', {
            pattern: {
              value: /.*\S.*/,
              message: dictionary.errors.empty,
            },
          })}
          onFocus={() => {
            clearErrors()
            setIsSelectedError(false)
          }}
          onChange={() => {
            if (Object.keys(errors).length !== 0) {
              clearErrors()
              if (isSelectedError) setIsSelectedError(false)
            }
          }}
        />
        {errors.organization?.type === 'pattern' && (
          <p className="absolute text-[12px] text-red-500 top-[105%]">
            {errors.organization.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-[12px] relative max-[380px]:w-[280px]">
        <label className="text-[16px] leading-[100%] font-normal self-start">
          {dictionary.phoneNumber.title} <span className="text-red-500">*</span>
        </label>
        <input
          className={`text-[14px] w-[320px] h-[40px] py-[13px] px-[16px] border-[1px] border-grey-border-color placeholder:text-[14px] placeholder:font-normal font-normal focus:border-blue-text focus:outline-none rounded-[4px] ${
            errors.phoneNumber && 'border-red-500'
          } max-[380px]:w-[280px]`}
          type="tel"
          {...register('phoneNumber', {
            required: true,
            pattern: {
              value: /.*\S.*/,
              message: dictionary.errors.empty,
            },
          })}
          placeholder={dictionary.phoneNumber.placeholder}
          onFocus={() => {
            clearErrors()
            setIsSelectedError(false)
          }}
          onChange={() => {
            if (Object.keys(errors).length !== 0) {
              clearErrors()
              if (isSelectedError) setIsSelectedError(false)
            }
          }}
        />
        {errors.phoneNumber?.type === 'required' && (
          <p className="absolute text-[12px] text-red-500 top-[110%]">
            {dictionary.errors.required}
          </p>
        )}
        {errors.phoneNumber?.type === 'pattern' && (
          <p className="absolute text-[12px] text-red-500 top-[105%]">
            {errors.phoneNumber.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-[12px] relative max-[380px]:w-[280px]">
        <label className="text-[16px] leading-[100%] font-normal self-start">
          {dictionary.email.title} <span className="text-red-500">*</span>
        </label>
        <input
          className={`text-[14px] w-[320px] h-[40px] py-[13px] px-[16px] border-[1px] border-grey-border-color placeholder:text-[14px] placeholder:font-normal font-normal focus:border-blue-text focus:outline-none rounded-[4px] ${
            errors.email && 'border-red-500'
          } max-[380px]:w-[280px]`}
          type="text"
          placeholder={dictionary.email.placeholder}
          {...register('email', {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          onFocus={() => {
            clearErrors()
            setIsSelectedError(false)
          }}
          onChange={() => {
            if (Object.keys(errors).length !== 0) {
              clearErrors()
              if (isSelectedError) setIsSelectedError(false)
            }
          }}
        />
        {errors.email?.type === 'pattern' && (
          <p className="absolute text-[12px] text-red-500 top-[110%]">
            {dictionary.errors.email}
          </p>
        )}
        {errors.email?.type === 'required' && (
          <p className="absolute text-[12px] text-red-500 top-[110%]">
            {dictionary.errors.required}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-[12px] w-[320px] text-[14px] font-normal self-center max-[380px]:w-[280px]">
        <label className="text-[16px] leading-[100%] font-normal self-start">
          {dictionary.topic.title} <span className="text-red-500">*</span>
        </label>
        <ClickAwayListener
          onClickAway={() => {
            setIsSelectOpen(false)
          }}
        >
          <div
            className={`relative text-[14px] text-[#a9a9a9] w-[320px] h-[40px] py-[13px] px-[16px] border-[1px] border-grey-border-color placeholder:text-[14px] placeholder:font-normal font-normal focus:border-blue-text focus:outline-none rounded-[4px] flex items-center bg-white cursor-pointer select-none ${
              isSelectOpen && 'border-blue-text'
            } ${isSelectedError && 'border-red-500'} max-[380px]:w-[280px]`}
            onClick={() => {
              setIsSelectOpen((prev: boolean) => !prev)
              setIsSelectedError(false)
              clearErrors()
            }}
          >
            {!selected && dictionary.topic.placeholder}
            {selected && <span className="text-black">{selected}</span>}
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-auto w-[15px] h-[10px]"
            >
              <path
                d="M11.8772 0.124044C11.7118 -0.041348 11.4431 -0.041348 11.2777 0.124044L6.0058 5.40625L0.72359 0.124044C0.558198 -0.041348 0.289436 -0.041348 0.124044 0.124044C-0.041348 0.289436 -0.041348 0.558199 0.124044 0.723591L5.69569 6.29524C5.77839 6.37793 5.88176 6.41928 5.99546 6.41928C6.09883 6.41928 6.21254 6.37793 6.29524 6.29524L11.8669 0.723591C12.0426 0.558199 12.0426 0.289436 11.8772 0.124044Z"
                fill="black"
              />
            </svg>
            <AnimatePresence>
              {isSelectOpen && (
                <motion.div
                  className="absolute top-[56px] left-[-1px] flex flex-col border-[1px] border-grey-border-color w-[320px] rounded-[4px] bg-white z-[10] max-[380px]:w-[280px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                >
                  <div
                    className="text-black border-b-[1px] border-grey-border-color px-[16px] py-[12px] leading-[100%] hover:bg-[#E6E6E6]"
                    onClick={() => {
                      setSelected(dictionary.topic.topics[0])
                      setSelectedIndex(0)
                    }}
                  >
                    {dictionary.topic.topics[0]}
                  </div>
                  <div
                    className="text-black border-b-[1px] border-grey-border-color px-[16px] py-[12px] leading-[100%] hover:bg-[#E6E6E6]"
                    onClick={() => {
                      setSelected(dictionary.topic.topics[1])
                      setSelectedIndex(1)
                    }}
                  >
                    {dictionary.topic.topics[1]}
                  </div>
                  <div
                    className="text-black px-[16px] py-[12px] leading-[100%] hover:bg-[#E6E6E6]"
                    onClick={() => {
                      setSelected(dictionary.topic.topics[2])
                      setSelectedIndex(2)
                    }}
                  >
                    {dictionary.topic.topics[2]}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            {isSelectedError && (
              <p className="absolute text-[12px] text-red-500 top-[120%] font-bold left-[0]">
                {dictionary.errors.required}
              </p>
            )}
          </div>
        </ClickAwayListener>
      </div>
      <div className="flex flex-col gap-[12px] relative">
        <label className="text-[16px] leading-[100%] font-normal self-start">
          {dictionary.message.title} <span className="text-red-500">*</span>
        </label>
        <textarea
          className={`w-[500px] h-[150px] resize-none text-[14px] py-[13px] px-[16px] border-[1px] border-grey-border-color placeholder:text-[14px] placeholder:font-normal font-normal focus:border-blue-text focus:outline-none rounded-[4px] ${
            errors.message && 'border-red-500'
          } max-[560px]:w-[400px] max-[460px]:w-[320px] max-[380px]:w-[280px]`}
          placeholder={dictionary.message.placeholder}
          maxLength={500}
          {...register('message', {
            required: true,
            pattern: {
              value: /.*\S.*/,
              message: dictionary.errors.empty,
            },
          })}
          onFocus={() => {
            clearErrors()
            setIsSelectedError(false)
          }}
        />
        {errors.message?.type === 'required' && (
          <p className="absolute text-[12px] text-red-500 top-[105%]">
            {dictionary.errors.required}
          </p>
        )}
        {errors.message?.type === 'pattern' && (
          <p className="absolute text-[12px] text-red-500 top-[105%]">
            {errors.message.message}
          </p>
        )}
      </div>
      <input
        type="submit"
        className="w-[500px] text-[18px] h-[48px] flex justify-center items-center bg-main-blue hover:bg-blue-hover text-white px-[12px] py-[16px] rounded-[4px] leading-[100%] font-bold cursor-pointer max-[560px]:w-[400px] max-[460px]:w-[320px] max-[380px]:w-[280px]"
        value={dictionary.button}
        onClick={() => {
          if (!selected) setIsSelectedError(true)
        }}
        onFocus={() => {
          clearErrors()
          setIsSelectedError(false)
        }}
      />
    </form>
  )
}
